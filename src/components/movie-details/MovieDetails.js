import './MovieDetails.css';
import {useEffect, useState} from "react";
import {getMovie} from "../../services/MoviesAPI";
import {getMovieImg500} from "../../services/ImgServices";
import StarRating from "../star-rating/StarRating";
import {setLoadingFalse, setLoadingTrue} from "../../redux/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {CircularProgress} from "@material-ui/core";

export default function MovieDetails(props) {
    let {match: {params: {id}}} = props;

    const {loading} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();

    const [movie, setMovie] = useState({});

    const getData = async () => {
        try {
            dispatch(setLoadingTrue())
            getMovie(id).then(value => {
                setMovie({...value.data})
            });
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setLoadingFalse());
        }
    }
    useEffect(() => {
        getData();
    }, []);


    const getOriginalTitle = () => {
        if (movie.title !== movie.original_title)
            return <span> ({movie.original_title})</span>
    }
    const getGenres = (genres) => {
        let movieGenresNames = '';
        for (let i = 0; i < genres.length; i++) {
            movieGenresNames += `${genres[i].name}, `
        }
        return movieGenresNames.slice(0, -2);
    }
    const runtime = (runtime) => {
        let m = runtime % 60;
        let h = (runtime - m) / 60;
        return {m, h}
    }
    if (loading) return <div className={'container loading'}><CircularProgress /></div>

    return (
        <div className={'container movie-details'}>
            <div>
                {
                    movie.backdrop_path &&
                    <img className={'movie-img'} src={getMovieImg500(movie.backdrop_path)} alt={movie.title}/>
                }
            </div>
            <div className={'movie-info'}>
                <div className={'title-flex'}>
                    <div>
                        <h1>{movie.title}{getOriginalTitle()}</h1>
                        <p className={'tagline'}>{movie.tagline}</p>
                    </div>
                    <div className={'vote'}>
                        <div><span>{movie.vote_average}</span> / 10</div>
                    </div>
                </div>

                <div className={'genres'}>
                    <div>{runtime(movie.runtime).h}hr {runtime(movie.runtime).m}min</div>
                    {movie.genres ? <div>{getGenres(movie.genres)}</div> : <div>loading...</div>}
                </div>

                <p className={'overview'}>{movie.overview}</p>
                {movie.vote_average ? <StarRating voteAverage={movie.vote_average}/> : ""}
            </div>

        </div>
    );
}