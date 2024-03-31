import React, { useState } from 'react';
import axios from 'axios';

function MusicPlayer() {
  const [audio] = useState(new Audio());

  const handlePlay = () => {
    audio.play();
  };

  const handlePause = () => {
    audio.pause();
  };

  const handleStop = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const handleForward = () => {
    if (audio.currentTime + 10 <= audio.duration) {
      audio.currentTime += 10;
    } else {
      audio.currentTime = audio.duration;
    }
  };

  const handleBackward = () => {
    if (audio.currentTime - 10 >= 0) {
      audio.currentTime -= 10;
    } else {
      audio.currentTime = 0;
    }
  };

  return (
    <div className="music-player">
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleForward}>Forward</button>
      <button onClick={handleBackward}>Backward</button>
    </div>
  );
}

export default MusicPlayer;

