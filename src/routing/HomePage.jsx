import React from 'react';
import DisplayGame from '../components/DisplayGame';
import GameOptions from '../components/GameOptions';
import Navbar from '../components/Navbar';

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className="title">Wavelength😼</h1>
      <div className="mainContainer">
        <DisplayGame />
        <GameOptions />
      </div>
    </>
  );
};

export default Home;
