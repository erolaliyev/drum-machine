import React from 'react';

const DrumPad = props => (
  <div
    className={`drum-pad`}
    id={props.letter}
    onClick={props.onClick}
    autoFocus
  >
    {props.letter}
    <audio src={props.src} id={props.letter} className='clip' />
  </div>
);

export default DrumPad;
