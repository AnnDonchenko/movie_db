import {
    GET_MOVIES_LIST,
} from "../actionTypes";

const initialStates = {
  movies: []
};

export const moviesReducer = (state = initialStates, action) => {
    switch (action.type){
        case GET_MOVIES_LIST:
            return {...state, movies: action.payload};
        default:
            return state;
    }
}