import {
    GET_MOVIES_LIST,
    GET_GENRE_LIST,
    LOADING_TRUE,
    LOADING_FALSE,
    THEME_LIGHT,
    THEME_DARK,
    SELECTED_PAGE,
    SELECTED_GENRE,
} from "../actionTypes";

const initialStates = {
    movies: [],
    genres: [],
    selectedPage: 1,
    selectedGenre: '',
    loading: true,
    theme: 'theme-light'
};

export const moviesReducer = (state = initialStates, action) => {
    switch (action.type) {
        case GET_MOVIES_LIST:
            return {...state, movies: action.payload};
        case GET_GENRE_LIST:
            return {...state, genres: action.payload};
        case LOADING_TRUE:
            return {...state, loading: true};
        case LOADING_FALSE:
            return {...state, loading: false};
        case SELECTED_PAGE:
            return {...state, selectedPage: action.payload};
        case SELECTED_GENRE:
            return {...state, selectedGenre: action.payload};
        case THEME_LIGHT:
            return {...state, theme: 'theme-light'};
        case THEME_DARK:
            return {...state, theme: 'theme-dark'};
        default:
            return state;
    }
}