import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    // <div class="bg-[url('/home-2.avif')] items-center bg-center bg-cover">
    <div className='h-screen bg-[#222222]'>
          <div class="flex mx-12">
            <div className='w-full pt-20 px-5'>
              <h2 className='text-7xl'>Ecom is a <span className='text-sky-500'>booming</span> industry</h2>
              <p className='text-lg pt-7'>
              Save time, turn your ideas into a reality. We bring together 
              </p>
              <p class='text-lg'>
              Reading is easier, too, in the new Reading view. 
              </p>
              <button class="py-3 px-5 uppercase  text-white text-sm my-7 bg-sky-500 rounded-md hover:bg-slate-700 hover:text-white">
                  <Link href='/about'>About us</Link>
              </button>
              <button class="py-3 px-5 uppercase  ml-5 text-sm my-7 bg-slate-200 rounded-md hover:bg-slate-700 hover:text-white text-black">
                  <Link href='/contact'>Contact</Link>
              </button>
            </div>
            <div class="absolute top-[70%] left-[13%] translate-x-[-50%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 animate-bounce">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
            </div>
            <div className='float-right w-[70%]'>
                  <Link href={'/'}><Image className='my-3 animate-none' src={"/shopping.png"} alt='logo' width={500} height={20}/></Link>
            </div> 
        </div>
        </div>
  )
}
