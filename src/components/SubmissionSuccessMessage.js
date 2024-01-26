import React from 'react';

const SubmissionSuccessMessage = ({ message }) => {
return message ? <div className="success-message">{message}</div> : null;
};

export default SubmissionSuccessMessage;