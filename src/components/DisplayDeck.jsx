import React, { useEffect } from 'react';
import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { database } from '../firebase.js';

const DisplayDeck = () => {
    useEffect(() => {
        // Function to render cards
        function renderCards(snapshot) {
            const cardsList = document.getElementById('cardsList');
            cardsList.innerHTML = '';
            snapshot.forEach((childSnapshot) => {
                const card = childSnapshot.val();
                const li = document.createElement('li');
                li.textContent = `Left: ${card.left}, Right: ${card.right}`;
                cardsList.appendChild(li);
            });
        }

        // Fetch cards from Firebase and render them
        onValue(ref(database, 'Cards/'), (snapshot) => {
            renderCards(snapshot);
        });
    }, []);

    return (
        <>
            <ul id="cardsList"></ul>
        </>
    );
}

export default DisplayDeck;
