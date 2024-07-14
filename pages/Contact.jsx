"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [display, setDisplay] = useState('hidden');

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeComment = (e) => {
    setComment(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      comment: comment,
    };
    setName('');
    setEmail('');
    setComment('');
    setDisplay('block');

    fetch('https://script.google.com/macros/s/AKfycbxbY5J9_M-L4qda22ev6RoI-HvYz5sPIU2Bv7puOhFl8IS94El0Eivfv7IUpmtm6ClD/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });

    setTimeout(() => {
      setDisplay('hidden');
    }, 5000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow relative p-5">
        <div className="bg-lb max-w-2xl rounded-xl mx-auto mt-5 p-5 shadow-lg">
          <form className="contact-form" onSubmit={submitForm}>
            <h2 className="text-db font-bold text-4xl mb-4">Get In Touch</h2>
            <h4 className="text-black font-semibold max-w-md mb-4">Use our FAQ Page or Reach out to AdmitAI Staff</h4>
            <hr className="border-2 border-db mb-4" />
            <div className="mb-4">
              <label htmlFor="fname" className="block text-db font-semibold text-lg mb-1">Name:</label>
              <input
                type="text"
                value={name}
                onChange={changeName}
                id="fname"
                name="fname"
                className="text-black border-2 border-black pl-2 py-1 w-full rounded-md"
                required
                placeholder='Chris Simms'
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-db font-semibold text-lg mb-1">Email:</label>
              <input
                id="email"
                name="email"
                value={email}
                onChange={changeEmail}
                type="email"
                required
                placeholder='aravarora05@gmail.com'
                className="text-black border-2 border-black pl-2 py-1 w-full rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="block text-db font-semibold text-lg mb-1">Comments:</label>
              <textarea
                required
                onChange={changeComment}
                className="h-32 w-full mb-4 pl-2 py-1 text-black border-2 border-black rounded-md"
                value={comment}
              />
            </div>
            <button type="submit" className="bg-db text-white p-2 rounded-lg w-full hover:bg-db-dark">Submit</button>
            <div className={`${display} w-full bg-blue-200 p-3 mt-5 rounded-xl`}>
              <h1 className="text-black">Thank you for submitting your information! We appreciate your interest and the time you've taken to reach out to us. Our team is currently reviewing your submission. A staff member will be in touch with you shortly to discuss the next steps.</h1>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
