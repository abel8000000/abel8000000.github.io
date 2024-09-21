// Import libraries
import React from 'react';
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';

// Import local files
import '../styles/app.css';

// Import components
import Background from './Background';
import Desktop from './Desktop';

const App = () => {
    return (
        <>
            <Desktop />
            <Background />
        </>
    );
};

export default App;