import React from 'react';

const Header = ({ text }) => {
  return (
    <div className="header flex gap-5 items-center">
      <div className="border h-10 w-5 bg-red-800 rounded-md"></div>
      <div>
        <p className="text-red-800 text-md font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default Header;
