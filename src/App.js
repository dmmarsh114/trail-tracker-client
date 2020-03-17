import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Sitebar from './Components/Home/Sitebar/Sitebar';


function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div className="App">
      <Router>
        <Sitebar updateToken={updateToken} clickLogout={clearToken} token={sessionToken} />
      </Router>
    </div>
  );
}

export default App;
