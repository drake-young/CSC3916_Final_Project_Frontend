import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../Reducers/authReducer';
import movieReducer from "../Reducers/movieReducer";
import purchReducer from "../Reducers/purchReducer";
const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const store = createStore(
    combineReducers({
        auth: authReducer,
        movie: movieReducer,
		purch: purchReducer
    }),
    applyMiddleware(
        ...middlewares
    )
);

export default store;