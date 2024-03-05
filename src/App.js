import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      {/* Other components here */}
    </Router>
  );
}

export default App;