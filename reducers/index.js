import { combineReducers } from 'redux';
import { actionwareReducer } from 'actionware';
import decks from './decks';

export default combineReducers({
  actionware: actionwareReducer,
  decks,
});
