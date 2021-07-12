import {
    GET_MOVIES_LIST,
    GET_GENRE_LIST,
} from "../actionTypes";

const initialStates = {
    movies: [],
    genres: []
};

export const moviesReducer = (state = initialStates, action) => {
    switch (action.type) {
        case GET_MOVIES_LIST:
            return {...state, movies: action.payload};
        case GET_GENRE_LIST:
            return {...state, genres: action.payload};
        default:
            return state;
    }
}