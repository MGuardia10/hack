import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';

export const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-[#000] fixed top-0 left-0 w-full transition-all duration-500 ${ isScrolled ? ' border-b border-gray-300' : '-mt-20'}`}>
      <nav>
        <div className='w-5/6 m-auto py-5 flex items-center justify-between md:w-11/12 md:py-4'>
          <Link to='/' className=''>
            <img 
            className='object-cover h-9'
            src="/images/home/logo_white.png"
            alt="GEMUKOIN logo"
            />
          </Link>
          <ul>
            <li>
              <Link to='/achievements'>
              <button className='py-1 px-4 bg-gradient-to-r from-purple-300 to-teal-300 font-bold'>
                CONNECT WALLET
              </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
