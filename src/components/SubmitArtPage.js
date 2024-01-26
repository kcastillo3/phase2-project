import React, { useState } from 'react';

const SubmitArtPage = () => {
const [artworkName, setArtworkName] = useState('');
const [description, setDescription] = useState('');
const [artistName, setArtistName] = useState('');
const [bio, setBio] = useState('');
const [image, setImage] = useState(''); 

const handleSubmit = (e) => {
e.preventDefault();
};

const handleImageChange = (e) => {
const file = e.target.files[0];
const reader = new FileReader();

reader.onloadend = () => {
    setImage(reader.result);
};

if (file) {
    reader.readAsDataURL(file);
}
};

return (
<div>
    <h1>Submit Art</h1>
    <div style={{ display: 'flex' }}>
    <ArtSubmissionForm
        artworkName={artworkName}
        description={description}
        artistName={artistName}
        bio={bio}
        setArtworkName={setArtworkName}
        setDescription={setDescription}
        setArtistName={setArtistName}
        setBio={setBio}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
    />
    {/* Preview Section */}
    <div>
        <h2>Preview</h2>
        <p>Artwork Name: {artworkName}</p>
        <p>Description: {description}</p>
        <p>By: {artistName}</p>
        <p>Bio: {bio}</p>
        {image && <img src={image} alt="Preview" style={{ width: '100%', height: 'auto' }} />}
    </div>
    </div>
</div>
);
};

const ArtSubmissionForm = ({
artworkName, description, artistName, bio,
setArtworkName, setDescription, setArtistName, setBio, handleImageChange, handleSubmit
}) => {
return (
<form onSubmit={handleSubmit}>
    <TextInput label="Artwork Name" value={artworkName} onChange={(e) => setArtworkName(e.target.value)} />
    <TextInput label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
    <TextInput label="Artist Name" value={artistName} onChange={(e) => setArtistName(e.target.value)} />
    <TextInput label="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
    <div className="input-group">
    <label>Upload Image of Art</label>
    <input type="file" onChange={handleImageChange} />
    </div>
    <button type="submit">Submit</button>
</form>
);
};

const TextInput = ({ label, value, onChange }) => {
return (
<div className="input-group">
    <label>{label}</label>
    <input type="text" value={value} onChange={onChange} />
</div>
);
};

export default SubmitArtPage;
