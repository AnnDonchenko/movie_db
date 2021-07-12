import GenreBadge from "../genre-badge/GenreBadge";
import './MovieInfo.css';
import StarRating from "../star-rating/StarRating";

export default function MovieInfo ({title, description, mainGenreName}){
    return (
        <div className={'movie-info'}>
            <h3 className={'title'}>{title}</h3>
            <GenreBadge mainGenreName={mainGenreName}/>
            <p className={'description'}>{description}</p>
            <StarRating/>
        </div>
    );
}