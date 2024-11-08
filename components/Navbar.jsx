'use client'
import { navbar } from '@/constants'
import { v4 as uuidv4 } from 'uuid'
import React, { useState } from 'react'
import { SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const { user } = useUser()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-backgroundColor font-serif">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <span className="font-semibold text-4xl font-serif">LektionsMaterial</span>
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="rounded-xl inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`md:block ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navbar.map((link) => {
              const key = uuidv4()
              if (link.label === 'Ladda upp lektionsplanering' && !user) {
                return null
              }

              return (
                <li key={key}>
                  <Link
                    href={link.route}
                    onClick={closeMenu}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            {/* <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              {user ? <UserButton /> : <SignInButton>Logga in</SignInButton>}
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
