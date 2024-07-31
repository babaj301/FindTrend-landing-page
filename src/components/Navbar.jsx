import React from 'react';
import { useState } from 'react';
import Logo from '../assets/logos-arrows/Vector.svg';
import Hamburger from '../assets/logos-arrows/hamburger.svg';
import CloseIcon from '../assets/logos-arrows/close.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  return (
    <div>
      <nav className="bg-black flex flex-row justify-between">
        <img src={Logo} alt="" />

        <button className="md:hidden" onClick={handleMenu}>
          {menuOpen ? (
            <img src={Hamburger} alt="" />
          ) : (
            <img src={CloseIcon} alt="" />
          )}
        </button>
      </nav>

      {/* Control for Hmaburger Menu */}

      {menuOpen ? (
        <div></div>
      ) : (
        <div className="flex-row text-center bg-black h-[60vh]">
          <div>
            <ul className="text-white justify-evenly text-center">
              {links.map((link) => {
                return (
                  <li key={link.name} className="mb-8 ">
                    <a href={link.path}>{link.name}</a>
                  </li>
                );
              })}
            </ul>

            <ul className="text-white flex-row justify-evenly text-center">
              <li className="mb-8">Login</li>
              <li className="mb-8">
                <button className="px-6 py-2 bg-white text-black rounded-xl ">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
