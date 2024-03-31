import axios from 'axios';

const API_BASE_URL = 'https://api.deezer.com';

// Função para buscar artistas pelo nome
export async function searchArtists(artistName) {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/artist/?q=${artistName}`);
    return response.data.data;
  } catch (error) {
    console.error('Erro ao buscar artistas:', error);
    return [];
  }
}
