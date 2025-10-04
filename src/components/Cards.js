import React, { useState, useEffect } from 'react';
import Card from './Card';
import ResetButton from './ResetButton';
import '../css/style.css';

/**
 * The Cards component manages the game state and renders the cards.
 */
const Cards = () => {
  // Initialize game state with empty arrays and objects
  const [colors, setColors] = useState([]); // Array of colors for the cards
  const [compare, setCompare] = useState([]); // Array to compare two cards
  const [matched, setMatched] = useState([]); // Array of indices of matched cards
  const [flippedCards, setFlippedCards] = useState({}); // Object to track flipped cards

  /**
   * Shuffles the colors array when the component mounts.
   */
  useEffect(() => {
    const shuffledColors = colorShuffle([
      "red", "red",
      "blue", "blue",
      "yellow", "yellow",
      "orange", "orange",
      "purple", "purple",
      "green", "green"
    ]);
    setColors(shuffledColors);
  }, []);

  /**
   * Checks if two cards are matched when the compare array has two cards.
   */
  useEffect(() => {
    if (compare.length === 2) {
      match(compare);
    }
  }, [compare]);

  /**
   * Handles the flip event of a card.
   * @param {number} index - The index of the card.
   * @param {string} color - The color of the card.
   */
  const handleFlip = (index, color) => {
    setFlippedCards((prevFlippedCards) => ({ ...prevFlippedCards, [index]: true }));
    setCompare((prevCompare) => [...prevCompare, { index, color, flipped: true }]);
  };

  /**
   * Checks if two cards are matched and updates the game state accordingly.
   * @param {array} compare - The array of two cards to compare.
   */
  const match = (compare) => {
    const firstColor = compare[0];
    const secondColor = compare[1];

    if (firstColor.color === secondColor.color) {
      // Update the matched state
      setTimeout(() => {
        setMatched((prevMatched) => [...prevMatched, firstColor.index, secondColor.index]);
      }, 600); // wait for 600ms before flipping back
    } else {
      // Update the flipped state
      setTimeout(() => {
        setFlippedCards((prevFlippedCards) => ({ ...prevFlippedCards, [firstColor.index]: false, [secondColor.index]: false }));
      }, 600); // wait for 600ms before flipping back
    }

    setCompare([]);
  };

  /**
   * Shuffles an array of colors.
   * @param {array} colors - The array of colors to shuffle.
   * @returns {array} The shuffled array of colors.
   */
  const colorShuffle = (colors) => {
    let currentIndex = colors.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [colors[currentIndex], colors[randomIndex]] = [
        colors[randomIndex], colors[currentIndex]];
    }

    return colors;
  };

  const allMatched = colors.length > 0 && matched.length === colors.length;

  return (
    <div>
      <div className='text-center mb-5 pt-3 pb-3'>
        <ResetButton 
          flippedCards={setFlippedCards} 
          matched={setMatched} 
          compare={setCompare} 
          colors={setColors} 
          colorShuffle={colorShuffle} 
        />
      </div>

      {allMatched && (
        <>
          <div className="confetti">
            {/* More confetti pieces with random positions and delays */}
            {Array.from({ length: 120 }).map((_, i) => {
              const left = Math.random() * 100;
              const delay = Math.random() * 2.5;
              const colorClass = `confetti-piece-${i % 6}`;
              return (
                <div
                  key={i}
                  className={`confetti-piece ${colorClass}`}
                  style={{ left: `${left}vw`, animationDelay: `${delay}s` }}
                ></div>
              );
            })}
          </div>
          <div className="you-won-message" style={{textAlign: 'center', fontSize: '8rem', color: 'yellow', margin: '2rem 0'}}>
            <strong>You win!</strong>
          </div>
        </>
      )}

      <div className='container'>
        {colors.map((color, index) => (
          <Card 
            key={index} 
            place={index} 
            color={color} 
            flipped={flippedCards[index] || false} 
            matched={matched.includes(index)} 
            handleFlip={() => handleFlip(index, color)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
