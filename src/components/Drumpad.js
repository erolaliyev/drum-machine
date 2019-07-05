import React from 'react';

const DrumPad = props => (
  <div>
    <div
      className={`drum-pad ${props.letter}`}
      onClick={props.onClick}
      autoFocus
    >
      {props.letter}
      <audio src={props.src} id={props.letter} className='clip' />
    </div>
  </div>
);

export default DrumPad;
