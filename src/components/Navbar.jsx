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
      <nav className="bg-black flex justify-between items-center">
        <div className="flex items-center  ">
          <img src={Logo} alt="" />
          <a
            href="/"
            className=" hidden md:inline-block md:text-white md:ml-2 md:font-semibold"
          >
            Findtrend
          </a>
        </div>

        <div className=" hidden md:flex">
          <ul className="text-white flex justify-evenly ">
            {links.map((link) => {
              return (
                <li key={link.name} className="mx-4 hover:underline">
                  <a href={link.path}>{link.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden md:flex flex-row">
          <button className="text-white mr-4 hover:underline">Login</button>
          <button className="px-4 py-1 mr-4 bg-white text-black rounded-full hover:bg-lime-400 hover:text-white text-center ">
            Register
          </button>
        </div>

        <button className="md:hidden" onClick={handleMenu}>
          {!menuOpen ? (
            <img src={Hamburger} alt="" />
          ) : (
            <img src={CloseIcon} alt="" />
          )}
        </button>
      </nav>

      {/* Control for Hamburger Menu */}

      {!menuOpen ? (
        <div></div>
      ) : (
        <div className=" absolute top-16 left-0 right-0 z-20 flex flex-row text-center justify-center items-center bg-black h-[60vh] md:hidden">
          <div className="">
            <ul className="text-white justify-evenly text-center">
              {links.map((link) => {
                return (
                  <li key={link.name} className="mb-8 hover:underline">
                    <a href={link.path}>{link.name}</a>
                  </li>
                );
              })}
            </ul>

            <ul className="text-white flex-row justify-evenly text-center">
              <li className="mb-8 hover:underline">Login</li>
              <li className="mb-8">
                <button className="px-6 py-2 bg-white text-black rounded-full  hover:bg-lime-400 hover:text-white text-center">
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
