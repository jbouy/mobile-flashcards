import { createReducer } from 'actionware';
import { loadDecks, addNewDeck } from '../actions/decks';

export default createReducer({})
  .on(loadDecks, (state, decks) => ({
    ...state,
    ...decks,
  }))
  .on(addNewDeck, (state, deck) => ({
    ...state,
    [deck.id]: deck,
  }));
