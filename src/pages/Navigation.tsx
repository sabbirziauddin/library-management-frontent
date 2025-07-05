import React from 'react';
import home from '../assets/home.svg'
import { Link } from 'react-router';

const Navigation = () => {
    return (
      <nav className="text-red-600 shadow-md px-6 py-3 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo or App Name */}

        {/* Navigation Links */}
        <div className="flex gap-4">
          <div className="flex items-center text-xl font-bold text-red-600">
            <img src={home} alt="Home" className="h-8 w-8 mr-2" />
            MyApp
          </div>
          <Link
            to="/borrow"
            className="text-white-600 hover:text-blue-600 px-3 py-2 rounded transition"
          >
            Borrow Books
          </Link>
          <Link
            to="/users"
            className=" text-white-600 hover:text-blue-600 px-4 py-2 rounded-lg  transition"
          >
            Users
          </Link>
          <Link
            to="/bookList"
            className=" text-white-600 hover:text-blue-600 px-4 py-2 rounded-lg  transition"
          >
            Book List
          </Link>
        </div>
      </nav>
    );
};

export default Navigation;