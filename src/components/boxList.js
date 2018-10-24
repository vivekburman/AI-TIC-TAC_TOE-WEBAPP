import React from 'react';
import Square  from './square';
const BoxList = ({boxes,handleOnClick}) => {
  const boxList=boxes.map((box,index) => {
    return (
        <Square key={index}
        onBoxClick= {(e) => handleOnClick(index)}
        box={box}
        />
    );
  });
  return (
      <div className='board'>{boxList}</div>
  );
};
export default BoxList;
