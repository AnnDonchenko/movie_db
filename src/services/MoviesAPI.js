import axios from 'axios';

const key = '?api_key=6c3e90eaf844493f5f5e4a3eb2ce90dc&language=en-US';
const axiosData = axios.create({baseURL: 'https://api.themoviedb.org/3'});

const getMovies = () => axiosData('/discover/movie' + key + '&page=3');
const getMovie = (id) => axiosData('/movie/'+ id + key);
const getMovieGenre = () => axiosData('/genre/movie/list' + key);

export {getMovies, getMovie, getMovieGenre}