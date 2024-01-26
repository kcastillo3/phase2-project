import React from 'react';

const TextInput = ({ label, value, onChange, type = 'text', name }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="text-input" 
      />
    </div>
  );
};

export default TextInput;
