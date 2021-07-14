import GenreBadge from "./genre-badge/GenreBadge";
import './MovieInfo.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import StarRating from "../../star-rating/StarRating";

export default function MovieInfo({id, title, description, mainGenreName, voteAverage}) {
    return (
        <div className={'movie-info'}>
            <h3 className={'title'}><Link to={'/movies/' + id}>{title}</Link></h3>
            <GenreBadge mainGenreName={mainGenreName}/>
            <p className={'description'}>{description}</p>
            <div className={'rating'}>
                <StarRating voteAverage={voteAverage}/>
                <span className={'fb'}><FontAwesomeIcon icon={faFacebook}/></span>
            </div>
        </div>
    );
}