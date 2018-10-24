// Just render X or O.
// Therefore a fucntional component
import React from 'react';
const Square=({box, onBoxClick}) => {
  if (box===' ')
    return (<div className='box' onClick={(e)=>onBoxClick('O')}></div>);
  if(box==='X')
    return (<div className='box typeX'>X</div>);
  else
    return (<div className='box typeO'>O</div>);
};
export default Square;
