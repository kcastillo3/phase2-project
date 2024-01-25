import React from 'react';

const TextArea = ({ label, value, onChange, name }) => {
return (
<div className="input-group">
    <label htmlFor={name}>{label}</label>
    <textarea id={name} name={name} value={value} onChange={onChange} />
</div>
);
};

export default TextArea;