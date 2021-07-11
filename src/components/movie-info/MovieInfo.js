import GenreBadge from "../genre-badge/GenreBadge";

export default function MovieInfo ({title, description, genreId}){
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <GenreBadge id={genreId}/>
        </div>
    );
}