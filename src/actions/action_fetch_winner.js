import axios from 'axios';
export const FETCH_WINNER = 'FETCH_WINNER';
export default function fetchWinner(board){
  const BASE_URL = 'http://localhost:3001/api/v1.0.0/get-winner';
  const request = axios.post(BASE_URL,board);
  return {
    type: FETCH_WINNER,
    payload: request
  };
}
