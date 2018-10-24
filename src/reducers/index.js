import { combineReducers } from 'redux';
import BoxesReducer from './reducer_boxes';

const rootReducer = combineReducers({
  board: BoxesReducer
});
export default rootReducer;
