import _ from 'lodash';
import * as Api from '../utils/api';

export async function loadDecks() {
  return Api.getDecks();
}

export async function addNewDeck(title) {
  if (_.isNil(title) || _.isEmpty(title)) {
    throw new Error('A title is required.');
  }

  return Api.addNewDeck(title);
}

export async function removeDeck(id) {
  await Api.removeDeck(id);

  return id;
}

export async function addCardToDeck(id, card) {
  await Api.addCardToDeck(id, card);

  return {
    id,
    ...card,
  };
}
