import {useEffect, useState} from "react";
import {getMovies} from "../../services/MoviesAPI";
import {getMoviesGenres} from "../../services/GenresAPI";
import MoviesListCard from "./movies-list-card/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {
    getGenresList,
    getMoviesList,
    setLoadingTrue,
    setLoadingFalse,
    setSelectedPage
} from "../../redux/actionCreators";
import './MoviesList.css'
import {Pagination} from "@material-ui/lab";
import {CircularProgress} from "@material-ui/core";

export default function MoviesList() {

    const {movies, genres, loading, selectedPage, selectedGenre} = useSelector(state => state.moviesReducer);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const getData = async () => {
        try {
            dispatch(setLoadingTrue())
            await getMovies(selectedPage, selectedGenre).then(value => dispatch(getMoviesList([...value.data.results])));
            await getMoviesGenres().then(value => dispatch(getGenresList([...value.data.genres])));
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setLoadingFalse());
        }
    }
    useEffect(() => {
        getData();
    }, []);

    const handleChange = (event, value) => {
        dispatch(setSelectedPage(value));
        setPage(value);
        getMovies(value, selectedGenre).then(item => dispatch(getMoviesList([...item.data.results])));
    }

    if (loading) return <div className={'container loading'}><CircularProgress /></div>

    return (
        <div className={'movies-block'}>
            <div className={'movies-list'}>
                {
                    movies && movies.map(value => <MoviesListCard key={value.id} movie={value} genres={genres}/>)
                }
            </div>
            <div className={'pagination'}><Pagination count={500} size="large" page={page} onChange={handleChange}/>
            </div>
        </div>
    );
}