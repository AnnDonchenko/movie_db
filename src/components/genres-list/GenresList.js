import {useEffect} from "react";
import {getMoviesGenres} from "../../services/GenresAPI";
import {useDispatch, useSelector} from "react-redux";
import {getGenresList, getMoviesList, setSelectedGenre, setSelectedPage} from "../../redux/actionCreators";
import './GenresList.css';
import {getMovies} from "../../services/MoviesAPI";

export default function GenresList() {
    const {genres, selectedGenre} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getMoviesGenres().then(value => dispatch(getGenresList([...value.data.genres])));
    }, []);

    const showMoviesByGenres = (event, id) => {
        dispatch(setSelectedGenre(id));
        dispatch(setSelectedPage(1));
        getMovies(1, id).then(value => dispatch(getMoviesList([...value.data.results])));
    }

    return (
        <div className={'genres-list'}>
            <ul>
                {genres.map(value => <li className={value.id === selectedGenre ? 'active-genre' : 'genre'}
                     key={value.id} onClick={(e)=>showMoviesByGenres(e, value.id)}>{value.name}</li>)}
            </ul>
        </div>
    );
}