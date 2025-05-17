import { useState } from 'react';
import './App.css';

const moods = [
  {
    label: 'Happy', emoji: '😃', color: '#ffe066', playlists: [
      'https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC',
      'https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0',
      'https://open.spotify.com/playlist/37i9dQZF1DX1BzILRveYHb',
    ]
  },
  {
    label: 'Chill', emoji: '😌', color: '#a0c4ff', playlists: [
      'https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6',
      'https://open.spotify.com/playlist/37i9dQZF1DX889U0CL85jj',
      'https://open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT',
    ]
  },
  {
    label: 'Stressed', emoji: '😣', color: '#bdb2ff', playlists: [
      'https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0',
      'https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO',
      'https://open.spotify.com/playlist/37i9dQZF1DWUvZBXGjNCU4',
    ]
  },
  {
    label: 'Energetic', emoji: '⚡', color: '#fdffb6', playlists: [
      'https://open.spotify.com/playlist/37i9dQZF1DX8FwnYE6PRvL',
      'https://open.spotify.com/playlist/37i9dQZF1DX1g0iEXLFycr',
      'https://open.spotify.com/playlist/37i9dQZF1DXdxcBWuJkbcy',
    ]
  },
  {
    label: 'Romantic', emoji: '😍', color: '#ffadad', playlists: [
      'https://open.spotify.com/playlist/37i9dQZF1DX50QitC6Oqtn',
      'https://open.spotify.com/playlist/37i9dQZF1DX6VdMW310YC7',
      'https://open.spotify.com/playlist/37i9dQZF1DX7gIoKXt0gmx',
    ]
  },
  {
    label: 'Sad', emoji: '😢', color: '#fbb1b1', playlists: [
      'https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1',
      'https://open.spotify.com/playlist/37i9dQZF1DX3YSRoSdA634',
      'https://open.spotify.com/playlist/37i9dQZF1DX7gIoKXt0gmx',
    ]
  },
  {
    label: 'Party', emoji: '🎉', color: '#b2f7ef', playlists: [
      'https://open.spotify.com/playlist/37i9dQZF1DXaXB8fQg7xif',
      'https://open.spotify.com/playlist/37i9dQZF1DX0BcQWzuB7ZO',
      'https://open.spotify.com/playlist/37i9dQZF1DX5uokaTN4FTR',
    ]
  },
  {
    label: 'Focus', emoji: '🧘', color: '#e2eafc', playlists: [
      'https://open.spotify.com/playlist/37i9dQZF1DX3PFzdbtx1Us',
      'https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS',
      'https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO',
    ]
  },
  {
    label: 'Sleepy', emoji: '😴', color: '#b5ead7', playlists: [
      'https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp',
      'https://open.spotify.com/playlist/37i9dQZF1DWYcDQ1hSjOpY',
      'https://open.spotify.com/playlist/37i9dQZF1DWSSBwgXMlrMk',
    ]
  },
  {
    label: 'Motivated', emoji: '🚀', color: '#fdffb6', playlists: [
      'https://open.spotify.com/playlist/37i9dQZF1DX1s9knjP51Oa',
      'https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP',
      'https://open.spotify.com/playlist/37i9dQZF1DXdxcBWuJkbcy',
    ]
  },
  {
    label: 'Nostalgic', emoji: '📼', color: '#cdb4db', playlists: [
      'https://open.spotify.com/playlist/37i9dQZF1DX4UtSsGT1Sbe',
      'https://open.spotify.com/playlist/37i9dQZF1DXbTxeAdrVG2l',
      'https://open.spotify.com/playlist/37i9dQZF1DXaKIA8E7WcJj',
    ]
  },
  {
    label: 'Angry', emoji: '😡', color: '#ffadad', playlists: [
      'https://open.spotify.com/playlist/37i9dQZF1DX3YSRoSdA634',
      'https://open.spotify.com/playlist/37i9dQZF1DX7gIoKXt0gmx',
      'https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0',
    ]
  },
];

function App() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [playlistIdx, setPlaylistIdx] = useState<number>(0);

  const handleMoodClick = (idx: number) => {
    setSelectedMood(idx);
    setPlaylistIdx(Math.floor(Math.random() * 3));
  };

  return (
    <div
      className="mood-app"
      style={{
        background: selectedMood !== null ? moods[selectedMood].color : 'var(--primary-bg)',
        transition: 'background 0.8s cubic-bezier(.68,-0.55,.27,1.55)',
        minHeight: '100vh',
      }}
    >
      <h1>Mood-Based Playlist Recommender</h1>
      <p>How are you feeling? Pick a mood to get a Spotify playlist:</p>
      <div className="mood-picker">
        {moods.map((mood, idx) => (
          <button
            key={mood.label}
            className={`mood-btn${selectedMood === idx ? ' selected' : ''}`}
            onClick={() => handleMoodClick(idx)}
            aria-label={mood.label}
          >
            <span style={{ fontSize: '2rem' }}>{mood.emoji}</span>
            <span className="mood-label">{mood.label}</span>
          </button>
        ))}
      </div>
      {selectedMood !== null && (
        <div className="playlist-recommendation">
          <h2>Playlist for {moods[selectedMood].label}</h2>
          <iframe
            title="Spotify Playlist"
            src={moods[selectedMood].playlists[playlistIdx].replace('playlist/', 'embed/playlist/')}
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: '12px', marginTop: '1rem' }}
          ></iframe>
          <div style={{ marginTop: '1rem' }}>
            <a
              href={moods[selectedMood].playlists[playlistIdx]}
              target="_blank"
              rel="noopener noreferrer"
              className="open-spotify"
            >
              Open in Spotify
            </a>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <button
              className="mood-btn"
              onClick={() => setPlaylistIdx((playlistIdx + 1) % 3)}
            >
              Show another playlist
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
