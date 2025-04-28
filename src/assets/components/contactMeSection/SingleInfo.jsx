import React from 'react';

const SingleInfo = ({ text, Icon }) => {
  let link = null;

  if (text.includes('@')) {
    // It's an email
    link = `mailto:${text}`;
  } else if (text.match(/^\+?[0-9\s-]+$/)) {
    // It's a phone number
    link = `tel:${text.replace(/\s+/g, '')}`; // Remove spaces for 'tel:' link
  }

  return (
    <div className="flex items-center gap-4">
      <Icon className="text-cyan text-2xl" />
      {link ? (
        <a
          href={link}
          className="text-white hover:text-cyan transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <p className="text-white">{text}</p>
      )}
    </div>
  );
};

export default SingleInfo;
