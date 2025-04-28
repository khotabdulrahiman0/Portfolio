import React from 'react';
import ContactForm from './ContactForm';

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col">
      <div>
        <h2 className="text-orange text-3xl mb-4 font-bold">Get In Touch</h2>
        <p className="text-white text-lg">
          Feel free to reach out if you'd like to collaborate or just have a question. You are just a
          few clicks away!
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;