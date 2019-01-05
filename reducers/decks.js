import { createReducer } from 'actionware';
import { loadDecks } from '../actions/decks';

export default createReducer({}).on(loadDecks, (state, decks) => ({ ...state, decks }));
