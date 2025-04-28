import React from 'react';
import SingleInfo from './SingleInfo';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = () => {
  const infoItems = [
    { text: 'khotabdulrahiman07@gmail.com', Icon: FaEnvelope },
    { text: '+91-7507759703', Icon: FaPhoneAlt },
    { text: 'Nasheman Colony, Dapoli, India', Icon: FaMapMarkerAlt },
  ];

  return (
    <div className="space-y-4">
      {infoItems.map((item, index) => (
        <SingleInfo key={index} text={item.text} Icon={item.Icon} />
      ))}
    </div>
  );
};

export default ContactInfo;