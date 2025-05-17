// Minimal Express backend for Spotify API proxy
// 1. npm install express node-fetch dotenv cors
// 2. Create a .env file with SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET

const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
const PORT = 5174;

let cachedToken = null;
let tokenExpires = 0;

async function getSpotifyToken() {
  if (cachedToken && Date.now() < tokenExpires) return cachedToken;
  const resp = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64'),
    },
    body: 'grant_type=client_credentials',
  });
  const data = await resp.json();
  cachedToken = data.access_token;
  tokenExpires = Date.now() + (data.expires_in - 60) * 1000;
  return cachedToken;
}

app.get('/search', async (req, res) => {
  const { genre, mood } = req.query;
  const token = await getSpotifyToken();
  const query = `${genre} ${mood}`;
  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=20`;
  const resp = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  const data = await resp.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Spotify proxy running on http://localhost:${PORT}`);
});
