import React from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import PresentationPage from './components/PresentationPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Player />
      <PresentationPage />
    </div>
  );
}

export default App;

