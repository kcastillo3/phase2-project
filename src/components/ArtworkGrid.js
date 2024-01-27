import React from 'react';
import ArtworkThumbnail from './ArtworkThumbnail';

function ArtworkGrid({ artworks }) {
return (
<div className="artwork-grid">
    {artworks.map((artwork) => (
    <ArtworkThumbnail key={artwork.id} artwork={artwork} />
    ))}
</div>
);
}

export default ArtworkGrid;



