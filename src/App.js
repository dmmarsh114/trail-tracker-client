import React, { useState, useEffect } from 'react';
import './App.css';

import Auth from './Components/Auth/Auth';
import Sitebar from './Components/Home/Sitebar';

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

  const protectedView = () => {
    return (sessionToken === localStorage.getItem('token') ? <h2>well howdy</h2>
      : <Auth updateToken={updateToken} />
    )
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div className="App">
      <Sitebar clickLogout={clearToken} />
      {protectedView()}
    </div>
  );
}

export default App;
