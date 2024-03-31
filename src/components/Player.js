import React, { useState } from 'react';
import axios from 'axios';
import MusicPlayer from './MusicPlayer';
import images from '../assets/images/frequencia.png';
import player from '../assets/images/player.png';


const Player = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [audio] = useState(new Audio());

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/deezer/search?q=${searchTerm}`);
      setSearchResults(response.data.data);
    } catch (error) {
      console.error('Error searching tracks:', error);
    }
  };

  const playTrack = (track) => {
    if (track.preview) {
      audio.src = track.preview; // URL da faixa de áudio
      audio.play(); // Reproduz a faixa de áudio
      setCurrentTrack(track);
    } else {
      console.error('URL de prévia da faixa de áudio não encontrada.');
    }
  };

  const pauseTrack = () => {
    audio.pause(); // Pausa a reprodução da faixa de áudio
  };

  const handleForward = () => {
    if (audio.currentTime + 10 <= audio.duration) {
      audio.currentTime += 10; // Avança 10 segundos na reprodução
    } else {
      audio.currentTime = audio.duration; // Define o tempo atual para o final da faixa
    }
  };

  const handleBackward = () => {
    if (audio.currentTime - 10 >= 0) {
      audio.currentTime -= 10; // Retrocede 10 segundos na reprodução
    } else {
      audio.currentTime = 0; // Define o tempo atual para o início da faixa
    }
  };

  return (
    <div className="player">
      <h2><img src={images} alt="frequencia" width="650" height="200" /></h2>
      <h2><img src={player} alt="player" width="420" height="88" /></h2>
      <MusicPlayer /> {/* Renderizando o componente MusicPlayer */}
      <h2>Escolha uma musica ou seu artista preferido</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar músicas"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <div className="search-results">
        {searchResults.map((track) => (
          <div key={track.id} className="track" onClick={() => playTrack(track)}>
            <img src={track.album.cover_medium} alt={track.title} />
            <p>{track.title}</p>
          </div>
        ))}
      </div>
      {currentTrack && (
        <div className="current-track">
          <h3>Now Playing:</h3>
          <p>{currentTrack.title}</p>
          <div className="player-controls">
            <button onClick={pauseTrack}>Pause</button>
            <button onClick={handleForward}>Forward</button>
            <button onClick={handleBackward}>Backward</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Player;
