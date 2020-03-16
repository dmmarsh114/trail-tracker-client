import React, { useState, useEffect } from 'react';
import './App.css';

import Auth from './Components/Auth/Auth';
import Sitebar from './Components/Home/Sitebar';
import TrailIndex from './Components/Trails/TrailIndex';

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
    return (sessionToken === localStorage.getItem('token') ? <TrailIndex token={sessionToken} />
      : <Auth updateToken={updateToken} />
    )
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div className="App">
      <Sitebar clickLogout={clearToken} token={sessionToken} />
      {protectedView()}
    </div>
  );
}

export default App;
