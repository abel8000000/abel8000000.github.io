import React, { useEffect } from 'react';
import '../styles/background.css';
import purplePlanetEarth from '../assets/images/purple-planet-earth.gif';
import myWorldMarquee from '../assets/images/my-world-marquee.png';
import backgroundImage from '../assets/images/background.png';

const Background = () => {
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setVh();
        window.addEventListener('resize', setVh);

        return () => {
            window.removeEventListener('resize', setVh);
        };
    }, []);

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        position: 'relative',
        width: '100vw',
        height: 'calc(var(--vh, 1vh) * 100)',
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