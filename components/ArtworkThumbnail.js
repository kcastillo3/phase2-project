import React from 'react';

function ArtworkThumbnail({ artwork }) {
const handleClick = () => {
alert(Clicked on ${artwork.name});
};

return (
<div className="artwork-thumbnail" onClick={handleClick}>
    <img src={artwork.imageUrl} alt={artwork.name} style={{ width: '100%', height: 'auto' }} />
    <h3>{artwork.name}</h3>
    <p>{artwork.artistName}</p>
</div>
);
}

export default ArtworkThumbnail;