import React from 'react';
import Cards from './Cards';
import '../css/style.css';

/**
 * The Body component renders the main content of the game.
 */
class Body extends React.Component {

  /**
   * Renders the JSX for the game content.
   * @returns {JSX} The JSX for the game content.
   */
  render() {
    
    return (
      // Container div for the game content
      <div className="body-container">

        {/* Header section with welcome message and instructions */}
        <div className='text-center mb-3 pt-3'>
          <h1>Welcome to the matching game!</h1>
          <h3>Click on the cards to get started.</h3>
        </div> 

        {/* Section for the cards component */}
        <div className="mt-3 pt-3">
          {/* Cards will be dynamically generated here */}
          <Cards />
          
        </div>

      </div>
    );
    
  }
}

export default Body;