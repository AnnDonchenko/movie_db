import axios from 'axios';

const key = '?api_key=6c3e90eaf844493f5f5e4a3eb2ce90dc&language=en-US';
const axiosData = axios.create({baseURL: 'https://api.themoviedb.org/3'});

const getMovies = (page, genreId = '') => {
    return axiosData('/discover/movie' + key + '&page=' + page + '&with_genres=' + genreId);
}
const getMovie = (id) => axiosData('/movie/' + id + key);

export {getMovies, getMovie}