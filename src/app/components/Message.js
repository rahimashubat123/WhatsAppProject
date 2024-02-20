import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="message">
      <p>{message.text}</p>
      <p>From: {message.name}</p>
     
    </div>
  );
};

export default Message;
