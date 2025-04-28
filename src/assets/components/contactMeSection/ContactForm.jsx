import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Important

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_ipt3bk9';
    const templateID = 'template_6hvfapl';
    const publicKey = 'DHxxSJFaS9bB_NtkX';

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Your message has been sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
          });
          form.current.reset(); 
        },
        (error) => {
          console.error(error.text);
          toast.error('Failed to send your message. Please try again.', {
            position: 'top-right',
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-6 space-y-4 flex flex-col"
        aria-label="Contact Form"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-4 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan"
          aria-label="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-4 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan"
          aria-label="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="p-4 bg-gray-900 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-cyan"
          aria-label="Your Message"
          required
        ></textarea>
        <button
          type="submit"
          className="py-3 px-6 bg-cyan text-white rounded-md hover:bg-orange transition-colors"
        >
          Send Message
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default ContactForm;
