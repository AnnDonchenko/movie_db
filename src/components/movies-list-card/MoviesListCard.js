import PosterPreview from "../poster-preview/PosterPreview";
import MovieInfo from "../movie-info/MovieInfo";
import './MoviesListCard.css';

export default function MoviesListCard ({movie}){
    return (
        <div className={'movies-list-card'}>
            <PosterPreview link={movie.poster_path} alt={movie.title}/>
            <MovieInfo title={movie.original_title} description={movie.overview} genreId={movie.genre_ids}/>
        </div>
    );
}