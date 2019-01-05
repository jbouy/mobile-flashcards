import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = 'MobileFlashCards:decks';

export async function getDecks() {
  const decksJson = await AsyncStorage.getItem(DECK_STORAGE_KEY);

  return JSON.parse(decksJson);
}

export async function saveDeckTitle(title) {
  await AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
      },
    }),
  );
}

export async function addCardToDeck(title, card) {
  const decks = JSON.parse(await AsyncStorage.getItem(DECK_STORAGE_KEY));
  const deck = !decks[title] ? { title } : decks[title];

  deck.questions = [...deck.questions, { question: card.question, answer: card.answer }];

  await AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [title]: deck,
    }),
  );
}

export async function removeDeck(title) {
  const decks = JSON.parse(await AsyncStorage.getItem(DECK_STORAGE_KEY));

  decks[title] = undefined;
  delete decks[title];

  await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
}