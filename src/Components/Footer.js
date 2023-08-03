// // src/components/Footer.js
// import React from 'react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-200 text-center py-2 mt-8">
//       <p className="text-gray-600">
//         &copy; {currentYear} Kitabu App. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black p-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} My Book App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

