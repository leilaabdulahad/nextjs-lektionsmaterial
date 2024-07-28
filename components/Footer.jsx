import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white py-2 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-black mb-1">LektionsMaterial</h2>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-black">
            <FaFacebookF />
          </a>
          <a href="#" className="text-black">
            <FaTwitter />
          </a>
          <a href="#" className="text-black">
            <FaInstagram />
          </a>
          <a href="#" className="text-black">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="text-black text-sm">
          &copy; {new Date().getFullYear()} LektionsMaterial. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
