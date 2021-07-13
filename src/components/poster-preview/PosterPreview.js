import './PosterPreview.css'
import {getMoviePoster300} from "../../services/MoviesAPI";

export default function PosterPreview({link, alt}) {
    return (
        <div className={'poster-preview'}>
            <img src={getMoviePoster300(link)} alt={alt}/>
        </div>
    );
}