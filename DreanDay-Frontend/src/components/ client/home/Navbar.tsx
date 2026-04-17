/** @format */

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { ChevronDown } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const linksArray = [
    {
      name: 'OUR SERVICES',
      path: 'services',
    },
    {
      name: 'WORK',
      path: 'work',
    },
  {
    name: (
      <span className="flex items-center gap-1">
        ABOUT <ChevronDown size={16} />
      </span>
    ),
    children: [
      { name: 'COMPANY', path: 'company' },
      { name: 'OUR STORY', path: 'our-story' },
    ],
  },
  ];

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className='bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] relative z-40'>
      <div className='flex flex-col md:flex-row items-center justify-between bg-white pr-10'>
        <div className='flex'>
          <Link to='/'>
            <img
              src='/WeedingLogo-.png'
              className='w-[250px]'
              alt='Logo'
            />
          </Link>
          <button
            className='block lg:hidden px-4 py-2 text-[#010c1f] hover:text-black'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            )}
          </button>
        </div>

        <nav
          className={`lg:flex lg:flex-row items-center   lg:items-center ${isOpen ? 'block' : 'hidden'} `}
        >
          <div className='flex w-[250px] md:w-full flex-col gap-5 pb-5 lg:flex-row lg:gap-10 items-center justify-around'>
            {linksArray.map((router, index) => (
              <div
                key={index}
                className='relative'
              >
                {router.children ? (
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className='text-[#87acec] hover:text-universal text-lg flex items-center gap-1'
                  >
                    {router.name}
                  </button>
                ) : (
                  <Link
                    to={router.path}
                    className='text-[#87acec] hover:text-universal text-lg'
                  >
                    {router.name}
                  </Link>
                )}

                {router.children && openDropdown === index && (
                  <div className='absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md z-50'>
                    {router.children.map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-[#fbc2eb] hover:text-white'
                        onClick={() => setOpenDropdown(null)} 
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } lg:flex items-center gap-5 mt-4 lg:mt-0`}
        >
          <div className='text-[#a6c1ee] bg-gray-100 p-3 rounded-full cursor-pointer'>
            <FaSearch />
          </div>

          <Link
            to='/login'
            className='text-[#87acec] px-5 py-2 rounded-md border-2 border-[#87acec] hover:bg-[#87acec] hover:text-white transition'
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
