import React from 'react';

const FileUpload = ({ label, onFileChange, name }) => {
return (
<div className="input-group">
    <label htmlFor={name}>{label}</label>
    <input id={name} name={name} type="file" onChange={onFileChange} />
</div>
);
};

export default FileUpload;
