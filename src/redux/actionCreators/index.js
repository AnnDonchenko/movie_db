import {
    GET_MOVIES_LIST,
    GET_GENRE_LIST,
    LOADING_TRUE,
    LOADING_FALSE,
    IMG_LOADING_TRUE,
    IMG_LOADING_FALSE,
} from '../actionTypes';

export const getMoviesList = (payload) => ({type: GET_MOVIES_LIST, payload});
export const getGenresList = (payload) => ({type: GET_GENRE_LIST, payload});
export const setLoadingTrue = () => ({type: LOADING_TRUE});
export const setLoadingFalse = () => ({type: LOADING_FALSE});
export const setImgLoadingTrue = () => ({type: IMG_LOADING_TRUE});
export const setImgLoadingFalse = () => ({type: IMG_LOADING_FALSE});
