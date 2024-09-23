import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='w-[100%] h-[90px] bg-[#123456]'>
            <ul className='flex justify-between w-[80%] mx-auto  font-bold uppercase items-center pt-[35px]'>
                <Link href="/">
                <li>Home</li>
                </Link>
                
                <Link href="/about">
                
                <li>About</li>
                </Link>

                <Link href='/services'>
                <li>Services</li>
                
                </Link>
                <Link href="/contact">
                <li>Contact</li>
                
                </Link>
                <Link href="/projects">
                <li>Portfolio Projects</li>
                
                </Link>
                <Link href="/user">
                <li>User</li>
                </Link>
                <Link href="/user/profile">
                <li>Profile</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar