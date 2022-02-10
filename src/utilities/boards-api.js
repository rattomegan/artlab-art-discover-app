import sendRequest from './send-request';

const BASE_URL = '/api/boards';

// Add an item to the board
export function addItemToBoard(itemDetail) {
  return sendRequest(`${BASE_URL}/board/items`, 'POST', itemDetail);
}

// Add an item to the board
export function findItemInDb(objectID) {
  return sendRequest(`${BASE_URL}/board/items/${objectID}`, 'GET');
}

// Remove an item from the board
export function removeItemFromBoard(itemID) {
  return sendRequest(`${BASE_URL}/board/items/${itemID}`, 'DELETE');
}

export function fetchFavorites() {
  return sendRequest(`${BASE_URL}/board/items`, 'GET');
}