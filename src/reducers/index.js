import { combineReducers } from 'redux';

import playerReducer from './playerReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  players: playerReducer,
  filters: filterReducer,
});