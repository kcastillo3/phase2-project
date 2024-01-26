import React, { useState, useEffect } from 'react';
import ArtworkThumbnail from './ArtworkThumbnail';

function ArtworkGrid() {
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
    // flattens the artworks from all artists into a single array
    const flattenedArtworks = artists.reduce((acc, artist) => [...acc, ...artist.artworks], []);
    setArtworks(flattenedArtworks);
    } catch (error) {
    console.error("Could not fetch the artworks: ", error.message);
    setError("Could not fetch the artworks. Please try again later.");
    }
};

fetchArtworks();
}, []);

return (
<div className="artwork-grid">
    {error && <p>{error}</p>}
    {artworks.map((artwork) => (
    <ArtworkThumbnail key={artwork.id} artwork={artwork} />
    ))}
</div>
);
}

export default ArtworkGrid;



