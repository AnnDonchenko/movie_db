import {useEffect} from "react";
import {getMovieGenre, getMovies} from "../../services/MoviesAPI";
import MoviesListCard from "../movies-list-card/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {getGenresList, getMoviesList} from "../../redux/actionCreators";
import './MoviesList.css'

export default function MoviesList (){
    const {movies, genres} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        getMovies().then(value => dispatch(getMoviesList([...value.data.results])));
        getMovieGenre().then(value => dispatch(getGenresList([...value.data.genres])))
    },[dispatch]);

    return (
        <div className={'container movies-list'}>
            {
                movies.length && genres.length &&
                movies.map(value => <MoviesListCard key={value.id} movie={value} genres={genres}/>)
            }
        </div>
    );
}