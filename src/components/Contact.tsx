import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send('service_db8ozjk', 'template_v3tddma', templateParams, 'YUoSQ0XFHglsNCzcV')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });

    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <div>
        <h1 className='contact-title'>Let's chat</h1>
        <p className='contact-description'>If you'd like to talk about a potential project or just say hi, send me a message or email me at</p>
        <button onClick={() => window.location.href = 'mailto:ArfaouiBadi19@gmail.com'} className='emailBtn'>ArfaouiBadi19@gmail.com !</button>
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