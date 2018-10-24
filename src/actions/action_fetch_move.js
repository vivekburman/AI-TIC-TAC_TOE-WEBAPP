import axios from 'axios';
export const FETCH_MOVE = 'FETCH_MOVE';
export default function fetchNextMove(board){
  const BASE_URL = 'http://localhost:3001/api/v1.0.0/get-next-move';
  const request = axios.post(BASE_URL,board);
  return {
    type: FETCH_MOVE,
    payload: request
  };
}
