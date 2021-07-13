import {
    GET_MOVIES_LIST,
    GET_GENRE_LIST,
    LOADING_TRUE,
    LOADING_FALSE,
    THEME_LIGHT,
    THEME_DARK,
} from '../actionTypes';

export const getMoviesList = (payload) => ({type: GET_MOVIES_LIST, payload});
export const getGenresList = (payload) => ({type: GET_GENRE_LIST, payload});
export const setLoadingTrue = () => ({type: LOADING_TRUE});
export const setLoadingFalse = () => ({type: LOADING_FALSE});
export const setThemeLight = () => ({type: THEME_LIGHT});
export const setThemeDark = () => ({type: THEME_DARK});
