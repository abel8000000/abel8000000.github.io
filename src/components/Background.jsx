import React from 'react';
import '../styles/background.css';
import purplePlanetEarth from '../assets/images/purple-planet-earth.gif';
import myWorldMarquee from '../assets/images/my-world-marquee.png';
import backgroundImage from '../assets/images/background.png';

const Background = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        margin: '0',
    };

    return (
        <div style={backgroundStyle}>
            <div id="decorative-elements">
                <div id="planet-screen">
                    <img src={purplePlanetEarth} alt="Planet" />
                </div>
                <div id="marquee">
                    <img src={myWorldMarquee} alt="Text marquee" />
                </div>
            </div>
            <p id="bottom-message">page under construction</p>
        </div>
    );
};

export default Background;