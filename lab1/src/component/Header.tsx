/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

interface HeaderProps {
  tabList: string[];
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header = ({ tabList, isMenuOpen, toggleMenu }: HeaderProps) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Responsive</h1>
          <nav className="relative">
            <div
              className="hamburger-menu cursor-pointer block sm:hidden"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars fa-2x"></i>
            </div>
            <ul
              className={`nav-menu ${
                isMenuOpen ? "block" : "hidden"
              } sm:flex space-x-4`}
            >
              {tabList.map((item) => {
                return (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-500">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      <div
        className={`mobile-menu bg-white shadow-lg fixed top-0 left-0 w-full h-full transition-transform transition-opacity duration-300 ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } sm:hidden`}
      >
        <div className="p-4 flex justify-end">
          <i
            className="fas fa-times fa-2x cursor-pointer"
            onClick={toggleMenu}
          ></i>
        </div>
        <ul className="flex flex-col items-center space-y-4">
          {tabList.map((item) => {
            return (
              <li key={item}>
                <a href="#" className="hover:text-blue-500">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
