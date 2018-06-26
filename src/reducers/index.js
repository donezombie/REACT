import { combineReducers } from 'redux';
import booksReducer from './reducer_book';
import concac from './concac';

//Show to Containers to know
const rootReducer = combineReducers({
  books : booksReducer,
  ahihi : concac,
});

export default rootReducer;
