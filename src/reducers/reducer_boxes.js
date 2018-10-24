import { FETCH_MOVE } from '../actions/action_fetch_move';
import { FETCH_WINNER } from '../actions/action_fetch_winner';
export default function (state = [], action){
  switch(action.type){
    case FETCH_MOVE:
    case FETCH_WINNER:
      const result=action.payload.data.result;
      const winner=action.payload.data.winner;
      const flag=action.payload.data.flag;
      return Object.assign({}, { boxes:result,winner:winner,flag:flag});
    default:
      return state;
  }
}
