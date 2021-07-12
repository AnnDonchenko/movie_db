import './PosterPreview.css'
import {getMoviePoster300} from "../../services/MoviesAPI";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setImgLoadingTrue, setImgLoadingFalse} from "../../redux/actionCreators";

export default function PosterPreview({link, alt}) {
    const [moviePoster, setMoviePoster] = useState('');
    // const dispatch = useDispatch();

    const getPoster = () => {
        try {
            // console.log(false);
            // dispatch(setImgLoadingTrue());
            getMoviePoster300(link).then(value => setMoviePoster(value.request.responseURL));
        } catch (e) {
            console.log(e);
        } finally {
            // console.log(true);
            // dispatch(setImgLoadingFalse());
        }
    }

    useEffect(() => {
        getPoster();
    }, []);

    // if (imgLoading) return <p>loading...</p>

    return (
        <div className={'poster-preview'}>
            <img src={moviePoster} alt={alt}/>
            {/*<img src={'https://image.tmdb.org/t/p/original/' + item.backdrop_path} alt=""/>*/}
            {/*<img src={'https://image.tmdb.org/t/p/w200/' + item.poster_path} alt=""/>*/}
        </div>

    );
}