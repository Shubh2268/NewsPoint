import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import altImage from '../asset/AltImage.png';
import { HiBars3 } from 'react-icons/hi2';
import { LiaTimesSolid } from 'react-icons/lia';

const Navbar = () => {

  const [navigation, setNavigation] = useState(false);

  const links = [
    {
      id: 1,
      link: '/',
      link_text: 'home'
    },
    {
      id: 2,
      link: '/business',
      link_text: 'business'
    },
    {
      id: 3,
      link: '/entertainment',
      link_text: 'entertainment'
    },
    {
      id: 4,
      link: '/health',
      link_text: 'health'
    },
    {
      id: 5,
      link: '/science',
      link_text: 'science'
    },
    {
      id: 6,
      link: '/sports',
      link_text: 'sports'
    },
    {
      id: 7,
      link: '/technology',
      link_text: 'technology'
    }
  ];

  return (

    <div className='w-screen h-16 top-0 z-20 fixed text-gray-900 bg-gray-300'>
      <div className='px-3 flex items-center justify-between w-full h-full'>

        <div className='flex items-center'>
          <img src={altImage} alt='logo' className='h-10 w-10 border-2 border-red-400 rounded-full' />
          <Link className='ml-2 font-semibold text-xl cursor-pointer' to='/'>NewsPoint</Link>
        </div>

        <ul className='hidden md:flex mx-5'>
          {
            links.map(({ id, link, link_text }) => (
              <Link key={id} className='mx-2 hover:underline font-medium cursor-pointer capitalize' to={link}>{link_text}</Link>
            ))
          }
        </ul>

        {/* burger icon */}
        <div className='md:hidden'>
          <div className='cursor-pointer'>
            <HiBars3 onClick={() => setNavigation(true)} size={30} />
          </div>
        </div>

      </div>

      {/* mobile menu  */}
      <div className={navigation ? 'md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur' : ''}>
        <div className={navigation ? 'fixed left-0 top-0 w-4/5 h-full bg-gray-300 text-gray-900 p-10 ease-in duration-500' : 'fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in'}>
          <div className='flex w-full items-center justify-between'>
            <div>
              {/* <img src={altImage} alt='logo' className='h-10 w-10 border-2 border-red-400 rounded-full' /> */}
              <Link className='ml-2 font-semibold text-xl cursor-pointer' to='/'>NewsPoint</Link>
            </div>
            <div>
              <LiaTimesSolid onClick={() => setNavigation(false)} size={30} />
            </div>
          </div>

          <div className='mt-6 flex flex-col h-fit gap-12'>
            <ul className='capitalize flex flex-col'>
              {
                links.map(({ id, link, link_text }) => (
                  <Link key={id} className='m-2 hover:underline font-medium cursor-pointer capitalize' to={link} onClick={() => setNavigation(false)}>{link_text}</Link>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
