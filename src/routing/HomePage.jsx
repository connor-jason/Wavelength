import React from 'react';
import CardForm from '../components/CardForm';
import DisplayGame from '../components/DisplayGame';
import GameOptions from '../components/GameOptions';

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Wavelength😼</h1>
      <div className="mainContainer">
        <DisplayGame />
        <GameOptions />
      </div>
    </>
  );
};

export default Home;
