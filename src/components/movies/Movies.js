import GenresList from "../genres-list/GenresList";
import MoviesList from "../movies-list/MoviesList";

export default function Movies (){
    return (
        <div>
            <div className={'container sides'}>
                <GenresList/>
                <MoviesList/>
            </div>
        </div>
    );
}