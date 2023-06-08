import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className=''>
        <div className='sticky flex items-center justify-between h-[5%] bg-[#222222] py-5 text-sm shadow-md px-12'>
            <div>
                <Link href={'/'}>
                    <h4 className='text-2xl'>ecom<span className='bg-sky-500 px-1 mx-1 text-white'>Boss</span></h4>
                {/* <Image className='cursor-pointer' src={"/ecom.png"} alt='logo' width={50} height={1}/> */}
                </Link>
            </div>
            <div >
                <ul className='flex space-x-7'>
                    <li className='cursor-pointer py-1 px-3 hover:bg-[#333333] hover:rounded-none hover:ease-in-out duration-150'><Link href={'/'}>Home</Link></li>
                    <li className='cursor-pointer py-1 px-3 hover:bg-bg-[#333333] hover:rounded-none hover:ease-in-out duration-150'><Link href={'/about'}>About</Link></li>
                    <li className='cursor-pointer py-1 px-3 hover:bg-bg-[#333333] hover:rounded-none hover:ease-in-out duration-150'><Link href={'/blog'}>Blog</Link></li>
                    <li className='cursor-pointer py-1 px-3 hover:bg-bg-[#333333] hover:rounded-none hover:ease-in-out duration-150'><Link href={'/portfolio'}>Portfolio</Link></li>
                    <li className='cursor-pointer py-1 px-3 hover:bg-bg-[#333333] hover:rounded-none hover:ease-in-out duration-150'><Link href={'/contact'}>Contact</Link></li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <ul className='flex space-x-3'>
                    <li className='cursor-pointer py-1 px-3 hover:bg-bg-[#333333] hover:rounded-none hover:ease-in-out duration-150'>Login</li>
                    <li className='cursor-pointer py-1 px-3 hover:bg-bg-[#333333] hover:rounded-none hover:ease-in-out duration-150'>Register</li>
                </ul>

            </div>
        </div>
    </header>
  )
}
