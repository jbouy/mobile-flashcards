import { createReducer } from 'actionware';
import { loadDecks, addNewDeck, removeDeck } from '../actions/decks';

export default createReducer({})
  .on(loadDecks, (state, decks) => ({
    ...state,
    ...decks,
  }))
  .on(addNewDeck, (state, deck) => ({
    ...state,
    [deck.id]: deck,
  }))
  .on(removeDeck, (state, id) => {
    const { [id]: remove, ...rest } = state;

    return {
      ...rest,
    };
  });
