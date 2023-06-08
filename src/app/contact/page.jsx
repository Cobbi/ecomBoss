import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className='h-screen'>
         <div className='flex justify-center my-5 mx-5 justify-items-center'>
            <div className='w-[50%] mr-auto'>
              <h3 className='text-2xl'>Contact </h3>
              <p className='text-1xl text-bold'>Let's keep iin touch </p>
                <Link href={'/'}><Image className='my-3 rounded-2xl' src={"/shopping.png"} alt='logo' width={400} height={20}/></Link>
              </div>
            <div className='w-[50%] my-3 mx-12'>
            <form className='border-sky-200'>
              <input className='w-full my-2 px-5 py-3 rounded-sm active:border-white-500' type='text' name='name' placeholder='Name' />
              <input className='w-full my-2 px-5 py-3 rounded-sm border-sky-500' type='email' name='email' placeholder='Email' />
              <textarea className='w-full my-2 px-5 py-3 rounded-sm border-sky-500' placeholder='Message' name='text' rows={10} cols={30}></textarea>
              <button className='w-full py-3 bg-sky-700 rounded-sm hover:bg-sky-900'>Submit</button>
            </form>  
          </div>
        </div>
    </div>
  )
}
