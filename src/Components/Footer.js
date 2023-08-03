
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black p-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} Kitabu App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

