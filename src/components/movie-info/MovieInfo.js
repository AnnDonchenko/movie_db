import GenreBadge from "./genre-badge/GenreBadge";
import './MovieInfo.css';
import StarRating from "./star-rating/StarRating";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

export default function MovieInfo({title, description, mainGenreName, voteAverage}) {
    return (
        <div className={'movie-info'}>
            <h3 className={'title'}>{title}</h3>
            <GenreBadge mainGenreName={mainGenreName}/>
            <p className={'description'}>{description}</p>
            <div className={'rating'}>
                <StarRating voteAverage={voteAverage}/>
                <span className={'fb'}><FontAwesomeIcon icon={faFacebook} /></span>
            </div>
        </div>
    );
}