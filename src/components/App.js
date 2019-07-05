import React from 'react';
import DrumPad from './Drumpad';

const assets = [
  {
    letter: 'Q',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    text: 'Heater-1'
  },
  {
    letter: 'W',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    text: 'Heater-2'
  },
  {
    letter: 'E',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    text: 'Kick'
  },
  {
    letter: 'A',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    text: 'Closed-HH'
  },
  {
    letter: 'S',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    text: 'Punchy-Kick'
  },
  {
    letter: 'D',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    text: 'Side-Stick'
  },
  {
    letter: 'Z',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    text: 'Snare'
  },
  {
    letter: 'X',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    text: 'Open-HH'
  },
  {
    letter: 'C',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    text: 'Chord-1'
  }
];

export default class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick(e) {
    const letter = e.target.textContent;
    const tune = assets.find(tune => tune.letter === letter);
    if (this.state.text !== tune.text) {
      this.setState({ text: tune.text });
    }
    e.persist();
    e.target.querySelector('audio').play();
    e.target.classList.add('active');
    const removeActiveClass = () => e.target.classList.remove('active');
    setTimeout(removeActiveClass, 200);
  }
  handleKeyPress(e) {
    const tune = assets.find(
      tune => tune.letter === e.key || tune.letter.toLowerCase() === e.key
    );
    if (tune) {
      document.querySelectorAll(`#${tune.letter}`)[1].play();
      if (this.state.text !== tune.text) {
        this.setState({ text: tune.text });
      }
      document.querySelector(`#${tune.letter}`).classList.add('active');
      const removeActiveClass = () =>
        document.querySelector(`#${tune.letter}`).classList.remove('active');
      setTimeout(removeActiveClass, 200);
    }
  }
  componentDidMount() {
    document.body.addEventListener('keypress', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.body.removeEventListener('keypress', this.handleKeyPress);
  }
  render() {
    return (
      <div id='drum-machine'>
        <p id='display'>{this.state.text}</p>
        <div id='drum-pads-container'>
          {assets.map(e => (
            <DrumPad
              key={e.letter}
              letter={e.letter}
              src={e.src}
              onClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}
