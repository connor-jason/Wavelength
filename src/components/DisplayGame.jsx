import React, { useRef } from 'react';
import spinner from '../images/spinner.png';
import open_white from '../images/open_white.png';
import open_clear from '../images/open_clear.png';
import closed from '../images/closed.png';
import triangles from '../images/triangles.png';

const DisplayGame = () => {
    const spinnerRef = useRef(null); // Reference to the spinner image

    const handleMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

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

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
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
            />
            <img src={closed} alt="closed" className="closed img" id="closed" />
        </div>
    );
};

export default DisplayGame;
