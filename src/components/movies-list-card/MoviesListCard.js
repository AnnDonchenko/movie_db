import PosterPreview from "../poster-preview/PosterPreview";
import MovieInfo from "../movie-info/MovieInfo";
import './MoviesListCard.css';

export default function MoviesListCard ({movie, genres}){

    let mainGenre = genres.filter(value => value.id === movie.genre_ids[0]);
    let mainGenreName = mainGenre[0].name;

    return (
        <div className={'movies-list-card'}>
            <PosterPreview link={movie.poster_path} alt={movie.title}/>
            {
                <MovieInfo title={movie.original_title} description={movie.overview} mainGenreName={mainGenreName}
                           voteAverage={movie.vote_average}/>
            }
        </div>
    );
}