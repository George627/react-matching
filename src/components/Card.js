import React from 'react';
import '../css/style.css';

/**
 * A single card component in the game.
 * 
 * @param {object} props
 * @param {string} props.color - The color of the card.
 * @param {number} props.place - The position of the card.
 * @param {boolean} props.flipped - Whether the card is flipped or not.
 * @param {boolean} props.matched - Whether the card is matched or not.
 * @param {function} props.handleFlip - Function to handle the card flip event.
 * @param {array} props.compare - Array for comparing cards.
 * @param {function} props.setCompare - Function to update the compare array.
 */
const Card = ({ color, place, flipped, matched, handleFlip, compare, setCompare }) => {

  return (
    // Container div for the card
    <div className={'flip-middle'}>
      {/* The card element with dynamic class names based on flipped and matched states */}
      <div className={`card flip-card ${flipped ? 'flip' : ''} ${matched ? 'matched' : ''}`} 
           onClick={() => handleFlip(place, color)}>
        {/* The front of the card */}
        <div className="front outer-card"></div>
        {/* The back of the card with dynamic background color */}
        <div className="back inner-card" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default Card;