import React from 'react';
import DisplayGame from '../components/DisplayGame';
import GameOptions from '../components/GameOptions';
import Navbar from '../components/Navbar';
import TitleComponent from '../components/TitleComponent';
import QuestionComponent from '../components/QuestionComponent.jsx';

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const Home = () => {
  return (
    <>
        <Navbar />
        <TitleComponent title="FAQ☝️🤓"/>
        <QuestionComponent question="How does this work?" answer="So you play Wavelength and you play it." />
        <QuestionComponent question="Can I add and remove cards?" answer="If I'm feeling generous idk." />
        <QuestionComponent question="Does this work on mobile?" answer="I have no idea!!" />
        <QuestionComponent question="How do the drawings look so good?" answer="I did them myself thank you😌. Shoutout to Notability and Apple Pencil." />
    </>
  );
};

export default Home;
