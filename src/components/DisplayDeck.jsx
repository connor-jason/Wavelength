import React, { useEffect, useState } from 'react';
import { getDatabase, ref, remove, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { database } from '../firebase.js';

const DisplayDeck = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Function to render cards
        function renderCards(snapshot) {
            const cardsList = document.getElementById('cardsList');
            cardsList.innerHTML = '';
            let index = 0; // Initialize index variable
            snapshot.forEach((childSnapshot) => {
                const card = childSnapshot.val();
                const tr = document.createElement('tr');
                const cardNumber = document.createElement('td');
                const left = document.createElement('td');
                const right = document.createElement('td');
                const cardId = childSnapshot.key; // Get the card ID

                index++; // Increment index for each card
                cardNumber.textContent = index;
                left.textContent = card.left;
                right.textContent = card.right;

                // Apply alternate row color based on index
                tr.style.backgroundColor = index % 2 === 0 ? '#e7e7e7' : '#ddd';

                tr.appendChild(cardNumber);
                tr.appendChild(left);
                tr.appendChild(right);

                cardsList.appendChild(tr);
            });
        }

        // Fetch cards from Firebase and render them
        onValue(ref(database, 'Cards/'), (snapshot) => {
            renderCards(snapshot);
        });
    }, []);

    // Function to handle removing a card
    const handleRemoveCard = (cardId) => {
        remove(ref(database, 'Cards/' + cardId));
    };

    return (
        <>
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Card Number</th>
                        <th>Left</th>
                        <th>Right</th>
                    </tr>
                </thead>
                <tbody id="cardsList"></tbody>
                <br></br>
            </table>
        </>
    );
}

export default DisplayDeck;
