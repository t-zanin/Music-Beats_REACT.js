const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001; // Escolha uma porta adequada para o seu servidor

// Middleware para permitir solicitações CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Rota para lidar com solicitações para a API Deezer
app.get('/api/deezer', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.deezer.com' + req.url);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Deezer API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
