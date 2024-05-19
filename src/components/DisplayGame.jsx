import React, { useRef } from 'react';
import spinner from '../images/spinner.png';
import open_white from '../images/open_white.png';
import open_clear from '../images/open_clear.png';
import closed from '../images/closed.png';
import triangles from '../images/triangles.png';

/**
 * Component for displaying the game.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the game display.
 */
const DisplayGame = () => {
    const spinnerRef = useRef(null); // Reference to the spinner image

    // Event handler 1 for mouse events (desktop interactions)
    const handleMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    // Event handler 1 for touch events (mobile interactions)
    const handleTouchStart = (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
    };

    // Event handler 2 for mouse events (desktop interactions)
    const handleMouseMove = (e) => {
        e.preventDefault();
        const spinner = spinnerRef.current;
        const rect = spinner.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate angle relative to center
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI) + 90;

        // Ensure the rotation stays within the range of -90 to 90 degrees
        const limitedAngle = Math.max(-90, Math.min(90, angle));

        // Apply the limited rotation angle
        spinner.style.transform = `rotate(${limitedAngle}deg)`;
    };

    // Event handler 2 for touch events (mobile interactions)
    const handleTouchMove = (e) => {
        e.preventDefault();
        const spinner = spinnerRef.current;
        const rect = spinner.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate angle relative to center
        const touch = e.touches[0];
        const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * (180 / Math.PI) + 90;

        // Ensure the rotation stays within the range of -90 to 90 degrees
        const limitedAngle = Math.max(-90, Math.min(90, angle));

        // Apply the limited rotation angle
        spinner.style.transform = `rotate(${limitedAngle}deg)`;
    };

    // Event handler 3 for mouse events (desktop interactions)
    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    // Event handler 3 for touch events (mobile interactions)
    const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
    };

    return (
        <div className="image-stack">
            <img src={open_white} alt="open_white" className="open_white img" id="open_white" />
            <img src={triangles} alt="triangles" className="triangles img" id="triangles" />
            <img src={open_clear} alt="open_clear" className="open_clear img" id="open_clear" />
            <img
                src={spinner}
                alt="spinner"
                className="spinner img"
                id="spinner"
                ref={spinnerRef}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            />
            <img src={closed} alt="closed" className="closed img" id="closed" />
        </div>
    );
};

export default DisplayGame;
