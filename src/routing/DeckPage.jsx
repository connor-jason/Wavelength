import React from 'react';
import DisplayDeck from '../components/DisplayDeck';
import Navbar from '../components/Navbar';
import TitleComponent from '../components/TitleComponent';
import FooterComponent from '../components/FooterComponent';

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const Home = () => {
  return (
    <>
      <Navbar />
      <TitleComponent title="The Deck🤗"/>
      <DisplayDeck />
      <FooterComponent />
    </>
  );
};

export default Home;
