import { ADD_MOVIE, RESET_STATUS, ADD_SEARCHLIST, RESET_SEARCH } from "./actions";

const initialState = {
    movies: [],
    total: 0,
    isLoading: true,
    search: [],
    isSearching: false
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
        case ADD_SEARCHLIST:
            {
                const movies = action.movies;
                return Object.assign({}, state, {
                    search: movies,
                    isSearching: true
                });
            }
        case RESET_SEARCH:
            {
                return Object.assign({}, state, {
                    search: [],
                    isSearching: false
                });
            }
        default:
            return state;
    }
}