import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="font-bold">LektionsMaterial</h2>
        </div>
        <div className="text-sm text-center my-2 md:my-0">
          © Copyright LektionsMaterial 2024
        </div>
        <div className="text-sm text-black md:text-right mt-4 md:mt-0">
          Hemsida av Leila Abdulahad
        </div>
      </div>
    </footer>
  )
}

export default Footer;
