import React from 'react';

const TextInput = ({ label, value, onChange, type = 'text' }) => {
return (
<div className="input-group">
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} />
</div>
);
};

const ArtSubmissionForm = ({
artworkName,
setArtworkName,
description,
setDescription,
artistName,
setArtistName,
bio,
setBio,
handleImageChange, 
handleSubmit
}) => {
return (
<form onSubmit={handleSubmit}>
    <TextInput
    label="Artwork Name"
    value={artworkName}
    onChange={(e) => setArtworkName(e.target.value)}
    />
    <TextInput
    label="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    />
    <TextInput
    label="Artist Name"
    value={artistName}
    onChange={(e) => setArtistName(e.target.value)}
    />
    <TextInput
    label="Bio"
    value={bio}
    onChange={(e) => setBio(e.target.value)}
    />
    <div className="input-group">
    <label>Upload Image of Art</label>
    <input type="file" onChange={handleImageChange} />
    </div>
    <button type="submit">Submit</button>
</form>
);
};

export default ArtSubmissionForm;

