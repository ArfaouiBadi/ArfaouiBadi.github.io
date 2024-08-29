import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform any necessary actions with the form data, such as sending it to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className="contact-container">
      <div>
        <h1 className='contact-title'>Let's chat</h1>
        <p className='contact-description'>If you'd like to talk about a potential project or just say hi, send me a message or email me at</p>
        <button onClick={() => window.location.href = 'mailto:ArfaouiBadi19@gmail.com'}>ArfaouiBadi19@gmail.com</button>!
      </div>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className="nameAndEmail">
          <input type='text' placeholder='Name' value={name} onChange={handleNameChange} />
          <input type='email' placeholder='Email' value={email} onChange={handleEmailChange} />
        </div>
        <div className="textAreaAndBtn">
          <textarea placeholder='Message' value={message} onChange={handleMessageChange}></textarea>
          <button type='submit' className="sendBtn">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;