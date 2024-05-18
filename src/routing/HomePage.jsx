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
    <div className="home-page">
      <Navbar />
      <TitleComponent title="Wavelength😼"/>
      <div className="mainContainer">
        <DisplayGame />
        <GameOptions />
      </div>
    </div>
    </>
  );
};

export default Home;
