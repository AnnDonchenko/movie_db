import {
    GET_MOVIES_LIST,
    GET_GENRE_LIST
} from '../actionTypes';

export const getMoviesList = (payload) => ({type: GET_MOVIES_LIST, payload});
export const getGenresList = (payload) => ({type: GET_GENRE_LIST, payload});