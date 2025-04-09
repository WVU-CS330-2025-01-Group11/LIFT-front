import React from 'react';
import Homepage from './Homepage.js';
import './style.css';

import { GlobalProvider } from './GlobalState.js';

function App() {
  return (
    <>
    <GlobalProvider>
     <Homepage />
    </GlobalProvider>
    </>
  );
}

export default App;
