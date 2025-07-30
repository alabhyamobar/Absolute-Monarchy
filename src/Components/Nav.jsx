import React, { useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Nav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleSearch = () => setShowSearch((prev) => !prev);
  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white px-8 py-6 text-2xl flex items-center justify-between  z-10 w-full absolute">
        {/* Logo */}
        <div className="text-xl font-semibold">Absolute Monarchy</div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-zinc-400">
            New Arrivals
          </a>
          <a href="#" className="hover:text-zinc-400">
            Men
          </a>
          <a href="#" className="hover:text-zinc-400">
            Women
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleSearch}>
            <FiSearch className="hover:text-zinc-400" />
          </button>
          <FiHeart className="hover:text-zinc-400 cursor-pointer hidden md:block" />
          <FiUser className="hover:text-zinc-400 cursor-pointer hidden md:block" />
          <FiShoppingBag className="hover:text-zinc-400 cursor-pointer hidden md:block" />
          {/* Mobile Menu Icon */}
          <button className="md:hidden" onClick={toggleMenu}>
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Search Bar (Appears below everything) */}
      {showSearch && (
        <div className="bg-gray-800 flex absolute z-10 top-20 items-center justify-center w-full px-6 py-3 ">
          <input
            type="text"
            placeholder="Search products..."
            className="w-dull md:w-[60vw]  px-6 py-2 rounded-full bg-gray-700 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>
      )}

      {/* Sliding Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-40 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="transition transform hover:rotate-90 duration-300"
          >
            <FiX size={24} className="text-white" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-start p-6 space-y-6">
          {["New Arrivals", "Men", "Women", "Wishlist", "Profile", "Cart"].map(
            (item) => (
              <a
                key={item}
                href="#"
                onClick={toggleMenu}
                className="hover:text-zinc-400 text-lg"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
