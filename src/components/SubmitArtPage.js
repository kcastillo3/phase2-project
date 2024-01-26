import React, { useState } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import FileUpload from './FileUpload';
import SubmitButton from './SubmitButton';
import SubmissionSuccessMessage from './SubmissionSuccessMessage'; 

const SubmitArtPage = () => {
const [artworkName, setArtworkName] = useState('');
const [description, setDescription] = useState('');
const [artistName, setArtistName] = useState('');
const [bio, setBio] = useState('');
const [image, setImage] = useState(null); 
const [successMessage, setSuccessMessage] = useState(''); 

const handleSubmit = (e) => {
e.preventDefault();

const formData = {
    artworkName,
    description,
    artistName,
    bio,
    image, 
};


fetch('http://localhost:3000/artists', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
})
.then(response => {
    if (response.ok) {
    return response.json();
    }
    throw new Error('Network response was not ok.');
})
.then(data => {
    console.log("Form submission successful:", data);
    setSuccessMessage('Artwork submitted successfully!'); 
})
.catch(error => {
    console.error('Error submitting form:', error);
    setSuccessMessage(''); 
});
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
      <form onSubmit={handleSubmit}>
        <TextInput label="Artwork Name" name="artworkName" value={artworkName} onChange={(e) => setArtworkName(e.target.value)} />
        <TextArea label="Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <TextInput label="Artist Name" name="artistName" value={artistName} onChange={(e) => setArtistName(e.target.value)} />
        <TextArea label="Bio" name="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
        <FileUpload label="Upload Image of Art" name="image" onFileChange={handleImageChange} />
        <SubmitButton label="Submit" />
      </form>
      {successMessage && <SubmissionSuccessMessage message={successMessage} />}

      {/* Preview Section */}
      <div className="preview-section">
        <h2>Preview</h2>
        {image && <img src={image} alt="Artwork" />}
        <p><strong>Artwork Name:</strong> {artworkName}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Artist Name:</strong> {artistName}</p>
        <p><strong>Bio:</strong> {bio}</p>
      </div>
    </div>
  );
};

export default SubmitArtPage;

