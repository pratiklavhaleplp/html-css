import React from 'react';
import SuperParent from './components/SuperParent/SuperParent';

function App() {
    const userAgent = window.navigator.userAgent;
    const isMobile = /Mobi/.test(userAgent);
    if (isMobile) {
        // Redirect to a mobile-specific page or display an error message
        alert('Apologies for the inconvenience you can not access this portfolio on mobile');
    }
    else
        return (
            <div><SuperParent width={window.screen.availWidth}
                height={window.screen.availWidth}
            /></div>

        );
}

export default App;