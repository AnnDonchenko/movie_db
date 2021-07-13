import axios from 'axios';

const key = '?api_key=6c3e90eaf844493f5f5e4a3eb2ce90dc&language=en-US';
const axiosData = axios.create({baseURL: 'https://api.themoviedb.org/3'});

const getMovies = (page) => axiosData('/discover/movie' + key + '&page=' + page);
const getMovie = (id) => axiosData('/movie/' + id + key);
const getMovieGenre = () => axiosData('/genre/movie/list' + key);

const imgServer = 'https://image.tmdb.org/t/p';
const getMoviePoster300 = (link) => (imgServer + '/w300' + link);
const getMovieImg500 = (link) => (imgServer + '/w500' + link);

export {getMovies, getMovie, getMovieGenre, getMoviePoster300, getMovieImg500}