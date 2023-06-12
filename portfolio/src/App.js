import React from 'react';
import SuperParent from './components/SuperParent/SuperParent';

function App() {
    return (
        <div><SuperParent width={window.screen.availWidth}
            height={window.screen.availWidth}
        /></div>

    );
}

export default App;