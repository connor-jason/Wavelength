import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routing/HomePage';
import DeckPage from './routing/DeckPage';
import FAQPage from './routing/FAQPage';

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/deck" element={<DeckPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
