import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import netflixLogo from "../public/netflixLogo.png"
import accountLogo from "../public/accountLogo.png"
import BasicMenu from './BasicMenu';

function Header() {

    const [isScrolled, setIsScrolled] = useState(false)
    const { logout} = useAuth()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }


        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
        <div className='flex items-center space-x-2 md:space-x-10 '>
        <Image
          src={netflixLogo}
          width={100}
          height={45}
          className="cursor-pointer object-contain"
        />


        <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
            <li className='headerLink'>Home</li>
            <li className='headerLink'>TV Shows</li>
            <li className='headerLink'>Movies</li>
            <li className='headerLink'>New & Popular</li>
            <li className='headerLink'>My List</li>
        </ul>

        </div>

        <div className='flex items-center space-x-4 text-sm font-light'>

            <SearchIcon className='hidden sm:inline h-6 w-6 ' />
            <p className='hidden lg:inline'>Kids</p>
            <BellIcon className='h-10 w-10 pr-4' />
            
    
            <Link href='/account'>
            <Image
            src={accountLogo}
            width={20}
            height={20}
            alt=""
            title='logout'
            className="cursor-pointer rounded"
          />
            </Link>
           

        </div>
    </header>
  )
}

export default Header