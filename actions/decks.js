import { getDecks } from '../utils/api';

export async function loadDecks() {
  return await getDecks();
}
