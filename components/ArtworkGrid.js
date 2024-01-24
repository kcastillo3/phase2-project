import React, { useState, useEffect } from 'react';
import ArtworkThumbnail from './ArtworkThumbnail';

function ArtworkGrid() {

const [artworks, setArtworks] = useState([]);


useEffect(() => {

const fetchArtworks = async () => {
    
    const response = await fetch('/db.json');
    const data = await response.json();
 setArtworks(allArtworks);
};

fetchArtworks();
}, []);

return (
<div className="artwork-grid">
    {artworks.map(artwork => (
    <ArtworkThumbnail key={artwork.id} artwork={artwork} />
    ))}
</div>
);
}

export default ArtworkGrid;