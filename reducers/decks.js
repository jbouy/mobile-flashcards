import { createReducer } from 'actionware';
import {
  loadDecks, addNewDeck, removeDeck, addCardToDeck,
} from '../actions/decks';

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
  })
  .on(addCardToDeck, (state, { id, question, answer }) => ({
    ...state,
    [id]: {
      ...state[id],
      questions: [...state[id].questions, { question, answer }],
    },
  }));
