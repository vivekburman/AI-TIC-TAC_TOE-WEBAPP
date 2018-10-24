// Render the whole table
// maintain state
// Class based component.
import React, { Component } from 'react';
import BoxList from './boxList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMove from '../actions/action_fetch_move';
import fetchWinner from '../actions/action_fetch_winner';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      boxes:Array(9).fill(' '),
      winner:"None",
      flag:0,
      turn:0
    };
  }
  static getDerivedStateFromProps(props,state){
    return {
      boxes: props.boxes,
      winner: props.winner,
      flag:props.flag
    };
  }
  componentDidUpdate(){
    if(this.state.flag=== 1 && this.state.winner==='None')
      this.props.fetchWinner(this.state.boxes)
  }
  handleClick(index){
    let newBoxes = this.state.boxes;
    newBoxes[index] = 'O';
    this.setState({ boxes: newBoxes ,turn:1});
    this.props.fetchMove(this.state.boxes);
  }
  render() {
    if(this.state.winner === "X")
      return (<h2 className='AI'>Artificial Intelligence WINS !!!!</h2>);
    else if(this.state.winner === "O")
      return (<h2 className='HU'>Human Player WINS !!!!</h2>);
    else if(this.state.winner === "DRAW")
      return (<h2>GAME IS DRAW !!!!</h2>);
    else{
      return(
          <BoxList
          handleOnClick={(index) => this.handleClick(index)}
          boxes={this.state.boxes}
          />
      );
    }
  }
}
function mapStateToProps(state){
  if(!state.board.winner){
    return {
      boxes:Array(9).fill(' '),
      winner:"None",
      flag:0
    };
  }
  return {
    boxes: state.board.boxes,
    winner: state.board.winner,
    flag:state.board.flag
  };
}
function mapDispatchToProps(dispatch){
  return {...bindActionCreators({fetchWinner, fetchMove}, dispatch)};
}
export default connect(mapStateToProps,mapDispatchToProps)(Board);
