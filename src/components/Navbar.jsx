import React from 'react';
import Logo from '../assets/logos-arrows/Vector.svg';
import Hamburger from '../assets/logos-arrows/hamburger.svg';

const Navbar = () => {
  const links = [
    {
      name: 'About',
      path: '/',
    },
    {
      name: 'How it works',
      path: '/',
    },
    {
      name: 'Pricing',
      path: '/',
    },
    {
      name: 'Solution',
      path: '/',
    },

    {
      name: 'Features',
      path: '/',
    },
  ];
  return (
    <div>
      <nav className="bg-black flex flex-row justify-between">
        <img src={Logo} alt="" />

        <button
          className="
        "
        >
          <img src={Hamburger} alt="" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
