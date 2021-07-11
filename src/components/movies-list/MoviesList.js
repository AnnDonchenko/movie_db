import {useEffect} from "react";
import {getMovies} from "../../services/MoviesAPI";
import MoviesListCard from "../movies-list-card/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {getMoviesList} from "../../redux/actionCreators";
import './MoviesList.css'

export default function MoviesList (){
    const {movies} = useSelector(state => state.moviesReducer)
    const dispatch = useDispatch();

    useEffect(()=>{
        getMovies().then(value => dispatch(getMoviesList([...value.data.results])));
    },[dispatch]);

    return (
        <div className={'container movies-list'}>
            {
                movies.map(value => <MoviesListCard key={value.id} movie={value}/>)
            }
        </div>
    );
}