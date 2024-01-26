import React from 'react';

function ArtworkThumbnail({ artwork }) {
  const imageUrl = `/images/${artwork.imageUrl}`;

return (
  <div className="artwork-thumbnail">
    <img src={imageUrl} alt={artwork.title} />
    <h3>{artwork.title}</h3>
    {/* Other artwork details */}
  </div>
);
}

export default ArtworkThumbnail;
