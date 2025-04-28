import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { IoLogoInstagram } from "react-icons/io";

const ContactSocial = () => {
  const socialLinks = [
    { link: 'https://linkedin.com/in/abdul-rahiman-khot', Icon: FaLinkedin },
    { link: 'https://github.com/khotabdulrahiman0', Icon: FaGithub },
    { link: 'https://www.instagram.com/khotabdulrahiman0/', Icon: IoLogoInstagram },
  ];

  return (
    <div className="flex space-x-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan text-3xl hover:text-orange transition-colors"
        >
          <social.Icon />
        </a>
      ))}
    </div>
  );
};

export default ContactSocial;