import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white py-2 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">LektionsMaterial</h2>
          <p className="text-gray-400">För lärare av lärare</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} LektionsMaterial. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
