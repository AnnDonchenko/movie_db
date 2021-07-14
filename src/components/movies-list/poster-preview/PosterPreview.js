import './PosterPreview.css'
import {getMoviePoster300} from "../../../services/ImgServices";

export default function PosterPreview({link, alt}) {
    return (
        <div className={'poster-preview'}>
            {link ? <img src={getMoviePoster300(link)} alt={alt}/> : <span>No Preview</span>}
        </div>
    );
}