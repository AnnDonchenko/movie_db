import {useEffect, useState} from "react";
import {getMovieGenre, getMovies} from "../../services/MoviesAPI";
import MoviesListCard from "../movies-list-card/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {getGenresList, getMoviesList, setLoadingTrue, setLoadingFalse} from "../../redux/actionCreators";
import './MoviesList.css'
import {Pagination} from "@material-ui/lab";

export default function MoviesList() {

    const {movies, genres, loading} = useSelector(state => state.moviesReducer);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const getData = async () => {
        try {
            dispatch(setLoadingTrue())
            await getMovies(page).then(value => dispatch(getMoviesList([...value.data.results])));
            await getMovieGenre().then(value => dispatch(getGenresList([...value.data.genres])));
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
        setPage(value);
        getMovies(value).then(item => dispatch(getMoviesList([...item.data.results])));
    }
    if (loading) return <div className={'container loading'}><h2>loading ...</h2></div>

    return (
        <div className={'container'}>
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