import { applyMiddleware, combineReducers, createStore } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { movieReducer } from './movie/reducer';

export const store = createStore(combineReducers({
    movie: movieReducer
}), applyMiddleware(thunk, logger));