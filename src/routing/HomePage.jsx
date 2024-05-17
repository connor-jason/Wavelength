import React from 'react';
import DisplayGame from '../components/DisplayGame';
import GameOptions from '../components/GameOptions';
import Navbar from '../components/Navbar';
import TitleComponent from '../components/TitleComponent';

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const Home = () => {
  return (
    <>
      <Navbar />
      <TitleComponent title="Wavelength😼"/>
      <div className="mainContainer">
        <DisplayGame />
        <GameOptions />
      </div>
    </>
  );
};

export default Home;
