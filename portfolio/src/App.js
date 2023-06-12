import React, { useState } from 'react';
import SuperParent from './components/SuperParent/SuperParent';

function App() {
  console.log('height', window);
  const [width] = useState(window.screen.availWidth);
  const [height] = useState(window.screen.availHeight);
  return (
    <SuperParent width={width} height={height} />
  );
}

export default App;
