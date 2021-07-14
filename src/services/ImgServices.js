const imgServer = 'https://image.tmdb.org/t/p';
const getMoviePoster300 = (link) => (imgServer + '/w300' + link);
const getMovieImg500 = (link) => (imgServer + '/w500' + link);

export {getMoviePoster300, getMovieImg500}