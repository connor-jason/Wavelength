import React, { useState } from 'react';
import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { database } from '../firebase.js';
import { Link } from 'react-router-dom';

function RandomCard() {
    const [randomCard, setRandomCard] = useState(null);
    const [coverOpen, setCoverOpen] = useState(true);
    const [seenCardIds, setSeenCardIds] = useState([]);

    const getRandomCard = () => {
        get(child(ref(database), 'Cards/')).then((snapshot) => {
            if (snapshot.exists()) {
                const cards = snapshot.val();
                const cardsArray = Object.keys(cards).map((key) => ({ id: key, ...cards[key] }));
                
                // Filter out cards that have already been seen
                const unseenCards = cardsArray.filter((card) => !seenCardIds.includes(card.id));
    
                if (unseenCards.length === 0) {
                    alert('No more unseen cards available');
                    return;
                }
    
                const randomIndex = Math.floor(Math.random() * unseenCards.length);
                const randomCard = unseenCards[randomIndex];
                
                // Update the list of seen card IDs
                setSeenCardIds([...seenCardIds, randomCard.id]);
    
                // Set the random card
                setRandomCard(randomCard);
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
                        <p>{'<--------'}</p>
                        <p>{randomCard.left}</p>
                    </div>
                    <div className="square right">
                        <p>{'-------->'}</p>
                        <p>{randomCard.right}</p>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="square left">
                        <p>{'<--------'}</p>
                        <p></p>
                    </div>
                    <div className="square right">
                        <p>{'-------->'}</p>
                        <p></p>
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
            <div className="gameOptionsContainer">
                <div className="cards">
                    {displayRandomCard(randomCard)}
                </div>
                <div className="buttons">
                    <button className="button" onClick={handleNewRound}>New Round</button>
                    <button className="button" onClick={handleCoverToggle}>
                        {coverOpen ? 'Close Cover' : 'Open Cover'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default RandomCard;
