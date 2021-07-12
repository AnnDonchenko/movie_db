import {
    GET_MOVIES_LIST,
    GET_GENRE_LIST,
    LOADING_TRUE,
    LOADING_FALSE,
    IMG_LOADING_FALSE,
    IMG_LOADING_TRUE
} from "../actionTypes";

const initialStates = {
    movies: [],
    genres: [],
    loading: true,
    imgLoading: true,
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
        case IMG_LOADING_TRUE:
            return {...state, imgLoading: true};
        case IMG_LOADING_FALSE:
            return {...state, imgLoading: false};
        default:
            return state;
    }
}