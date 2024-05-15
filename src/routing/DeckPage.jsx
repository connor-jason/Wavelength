import React from 'react';
import { Link } from 'react-router-dom';
import DisplayDeck from '../components/DisplayDeck';
import CardForm from '../components/CardForm';

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const Home = () => {
  return (
    <>
      <Link to="/">Back</Link>
      <CardForm />
      <DisplayDeck />
    </>
  );
};

export default Home;
