import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()

  let isHomePage = location.pathname === '/'
  let isContactPage = location.pathname === '/contact'
  let isAboutPage = location.pathname === '/about'
  let isSignupPage = location.pathname === '/signup'
  let isAccountPage = location.pathname === '/account'

  let activeMenuStyle = 'block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-900 md:underline underline-offset-4  md:hover:text-gray-700 md:p-0 md:dark:text-gray-500'
  let inactiveMenuStyle = 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:underline underline-offset-4  md:hover:text-gray-700 md:p-0 md:dark:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
  return (
    <div className='mb-16 md:mb-9'> 
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Exclusive</span>
        </Link>
        
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button className='lg:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </button>

        {/* The menu icons are here */}

        
            <div className='md:flex items-center gap-5 hidden'>
              <div className="flex gap-3 bg-gray-200 items-center px-2 rounded md:hidden lg:flex">
                <input type='text' placeholder='What are you looking for?' className='bg-transparent border-none outline-none focus:ring-transparent placeholder:text-sm'/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <Link to="/account">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={isAccountPage?`w-6 h-6 bg-red-500 text-white rounded-full p-1`:`w-6 h-6`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              </Link>
            </div>


           {/* The hamburger button is here */}


            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>

        {/* The menu list is here */}


        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link to='/'className={isHomePage?activeMenuStyle:inactiveMenuStyle} aria-current="page">Home</Link>
            </li>
            <li>
              <Link to='/contact' className={isContactPage?activeMenuStyle:inactiveMenuStyle}>Contacts</Link>
            </li>
            <li>
              <Link to='/about' className={isAboutPage?activeMenuStyle:inactiveMenuStyle}>About</Link>
            </li>
            <li>
              <Link to='/signup' className={isSignupPage?activeMenuStyle:inactiveMenuStyle}>Sign up</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar