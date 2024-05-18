import React, { useState } from 'react';
import { ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { database } from '../firebase.js';

/**
 * A form component for adding cards.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.addCard - The function to add a card.
 * @returns {JSX.Element} The JSX element representing the card form.
 */
function CardForm({ addCard }) {
    const [leftInput, setLeftInput] = useState('');
    const [rightInput, setRightInput] = useState('');

    // Add card when the add button is clicked
    const handleSubmit = (e) => {
        e.preventDefault();
        set(ref(database, 'Cards/' + Date.now()), {
            left: leftInput,
            right: rightInput
        });
        alert('Card added successfully');
        setLeftInput('');
        setRightInput('');
    };

    return (
        <form className="card-form" onSubmit={handleSubmit}>
            <label htmlFor="leftInput">Left:</label>
            <input type="text" id="leftInput" value={leftInput} onChange={(e) => setLeftInput(e.target.value)} />
            <label htmlFor="rightInput">Right:</label>
            <input type="text" id="rightInput" value={rightInput} onChange={(e) => setRightInput(e.target.value)} />
            <button id="addButton" type="submit">Add</button>
        </form>
    );
}

export default CardForm;
