import axios from 'axios';

const key = '?api_key=6c3e90eaf844493f5f5e4a3eb2ce90dc&language=en-US';
const axiosData = axios.create({baseURL: 'https://api.themoviedb.org/3'});

const getMovies = (page, id = '') => {
    axiosData('/discover/movie' + key + '&page=' + page + '&with_genres=' + id).then(value => console.log(value.config.url));
    return axiosData('/discover/movie' + key + '&page=' + page + '&with_genres=' + id);
}
const getMoviesWithGenres = (id) => {
    axiosData('/discover/movie' + key + '&with_genres=' + id).then(value => console.log(value.config.url));
    return axiosData('/discover/movie' + key + '&with_genres=' + id);
}
const getMovie = (id) => axiosData('/movie/' + id + key);

export {getMovies, getMovie, getMoviesWithGenres}