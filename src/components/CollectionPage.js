import React, { useState, useEffect } from 'react';
import ArtworkGrid from './ArtworkGrid';

function CollectionPage() {
const [artworks, setArtworks] = useState([]);
const [error, setError] = useState('');

useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch('http://localhost:3000/artists');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const artists = await response.json();
        const flattenedArtworks = artists.reduce((acc, artist) => {
          const artworks = Array.isArray(artist.artworks) ? artist.artworks : [];
          return [...acc, ...artworks];
        }, []);
        setArtworks(flattenedArtworks);
      } catch (error) {
        console.error("Could not fetch the artworks: ", error.message);
        setError("Could not fetch the artworks. Please try again later.");
      }
    };
  
    fetchArtworks();
  }, []);

return (
<div className="collection-page">
    <h1>Art Collection</h1>
    {error && <p>{error}</p>}
    <ArtworkGrid artworks={artworks} />
</div>
);
}

export default CollectionPage;

