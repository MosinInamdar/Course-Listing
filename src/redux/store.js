import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import courseReducer from './reducers/courseReducer';
import studentReducer from './reducers/studentReducer';

const rootReducer = combineReducers({
  courses: courseReducer,studentReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
