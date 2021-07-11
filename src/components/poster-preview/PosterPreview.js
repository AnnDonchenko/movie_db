import './PosterPreview.css'
export default function PosterPreview ({link, alt}){
    return (
        <div className={'poster-preview'}>
            {/*<img src={'https://image.tmdb.org/t/p/original/' + item.backdrop_path} alt=""/>*/}
            <img src={'https://image.tmdb.org/t/p/w300/' + link} alt={alt}/>
            {/*<img src={'https://image.tmdb.org/t/p/w200/' + item.poster_path} alt=""/>*/}
        </div>

    );
}