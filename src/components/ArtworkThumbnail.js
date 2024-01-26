import React, { useState, useEffect } from 'react';
import ArtworkThumbnail from './ArtworkThumbnail';

function ArtworkGrid() {
 const [artworks, setArtworks] = useState([]);

 useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setArtworks(data));
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