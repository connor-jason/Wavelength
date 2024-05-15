import React, { useState } from 'react';
import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { database } from '../firebase.js';
import { Link } from 'react-router-dom';

function RandomCard() {
    const [randomCard, setRandomCard] = useState(null);
    const [coverOpen, setCoverOpen] = useState(false); // State to track if cover is open

    const getRandomCard = () => {
        get(child(ref(database), 'Cards/')).then((snapshot) => {
            if (snapshot.exists()) {
                const cards = snapshot.val();
                const cardsArray = Object.keys(cards).map((key) => ({ id: key, ...cards[key] }));
                const randomCard = cardsArray[Math.floor(Math.random() * cardsArray.length)];
                setRandomCard(randomCard); // Set the random card
            } else {
                alert('No cards available');
            }
        });
    };

    const displayRandomCard = (randomCard) => {
        if (randomCard) {
            return (
                <>
                    <div className="square left">
                        <p>{randomCard.left}</p>
                        <p>{'<--------'}</p>
                    </div>
                    <div className="square right">
                        <p>{randomCard.right}</p>
                        <p>{'-------->'}</p>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="square left">
                        <p></p>
                        <p>{'<--------'}</p>
                    </div>
                    <div className="square right">
                        <p></p>
                        <p>{'-------->'}</p>
                    </div>
                </>
            );
        }
    };

    const handleNewRound = () => {
        // Fetch a new random card
        getRandomCard();
        
        // Reset images and rotations
        document.getElementById('closed').style.opacity = 1; // Set closed image opacity to 1
        document.getElementById('spinner').style.transform = 'rotate(0deg)'; // Reset spinner rotation
        const randomRotation = Math.floor(Math.random() * 360); // Generate random rotation angle (0-359 degrees)
        document.getElementById('triangles').style.transform = `rotate(${randomRotation}deg)`; // Set random rotation for triangles
        setCoverOpen(false);
    };

    const handleCoverToggle = () => {
        const closedImage = document.getElementById('closed');
        // Toggle cover opacity
        if (closedImage.style.opacity === '1') {
            closedImage.style.opacity = '0';
            setCoverOpen(true);
        } else {
            closedImage.style.opacity = '1';
            setCoverOpen(false);
        }
    };

    return (
        <>
            <div className="container">
                {displayRandomCard(randomCard)}
            </div>
            <div className="container" style={{ marginTop: 0 }}>
                <button className="button" onClick={handleNewRound}>New Round</button>
                <button className="button" onClick={handleCoverToggle}>
                    {coverOpen ? 'Close Cover' : 'Open Cover'}
                </button>
                <Link to="/deck" className="button" id="viewDeck">View Deck</Link>
            </div>
        </>
    );
}

export default RandomCard;
