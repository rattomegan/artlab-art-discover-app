import sendRequest from './send-request';

const BASE_URL = '/api/boards';

// Add an item to the board
export function addItemToBoard(itemDetail) {
  return sendRequest(`${BASE_URL}/board/items`, 'POST', itemDetail);
}