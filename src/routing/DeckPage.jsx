import React from 'react';
import DisplayDeck from '../components/DisplayDeck';
import CardForm from '../components/CardForm';
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
      <CardForm />
      <DisplayDeck />
    </>
  );
};

export default Home;
