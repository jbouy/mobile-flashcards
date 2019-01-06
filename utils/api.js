import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = 'MobileFlashCards:decks';

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15)
    + Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export async function getDecks() {
  const decksJson = await AsyncStorage.getItem(DECK_STORAGE_KEY);
  return JSON.parse(decksJson || '{}');
}

export async function addNewDeck(title) {
  const deck = {
    id: generateUID(),
    title,
    questions: [],
  };

  await AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [deck.id]: deck,
    }),
  );

  return deck;
}

export async function addCardToDeck(id, card) {
  const decks = JSON.parse(await AsyncStorage.getItem(DECK_STORAGE_KEY));
  const deck = decks[id];

  if (deck == null) throw new Error('Could not find deck to add card to.');

  deck.questions = [...deck.questions, { question: card.question, answer: card.answer }];

  await AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [id]: deck,
    }),
  );
}

export async function removeDeck(id) {
  const decks = JSON.parse(await AsyncStorage.getItem(DECK_STORAGE_KEY));

  decks[id] = undefined;
  delete decks[id];

  await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
}
