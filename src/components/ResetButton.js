import React from 'react';

/**
 * The ResetButton component resets the game state when clicked.
 * 
 * @param {object} props
 * @param {function} props.flippedCards - Function to reset the flipped cards state.
 * @param {function} props.matched - Function to reset the matched cards state.
 * @param {function} props.compare - Function to reset the compare cards state.
 * @param {function} props.colors - Function to reset the colors state.
 * @param {function} props.colorShuffle - Function to shuffle the colors array.
 */
const ResetButton = ({ flippedCards, matched, compare, colors, colorShuffle }) => {

  /**
   * Handles the reset event by resetting the game state.
   */
  const handleReset = () => {
    // Reset the flipped cards state
    flippedCards({});
    // Reset the matched cards state
    matched([]);
    // Reset the compare cards state
    compare([]);
    // Reset the colors state after a short delay
    setTimeout(() => {
      colors(colorShuffle([
        "red", "red",
        "blue", "blue",
        "yellow", "yellow",
        "orange", "orange",
        "purple", "purple",
        "green", "green"
      ]));
    }, 500); // wait for 500ms before resetting colors
  };

  return (
    // Render the reset button
    <button className="btn btn-light" onClick={handleReset}>Reset</button>
  );
};

export default ResetButton;