import { ADD_MOVIE, RESET_STATUS } from "./actions";

const initialState = {
    movies: [],
    total: 0,
    isLoading: true
};

export function movieReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIE:
            {
                const movies = state.movies.concat(action.movies["content-items"].content);
                return Object.assign({}, state, {
                    movies,
                    total: action.movies["total-content-items"],
                    page: action.movies["page-num-requested"],
                    isLoading: false
                });
            }
        case RESET_STATUS:
            {
                return Object.assign({}, state, {
                    isLoading: true
                });
            }
        default:
            return state;
    }
}