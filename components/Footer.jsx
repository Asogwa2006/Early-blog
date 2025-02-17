import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <main className='bg-blue-50 border-t border-gray-200 text-center py-4'>
      <div className='mx-auto'>
        <div className='flex justify-center md:gap-10 gap-4 mb-3 max-md:items-center max-md:flex-col'>
            <Link href={"/about"} className='text-gray-600 hover:text-gray-800 text-center text-sm hover:underline'>About</Link>
            <Link href={"/contact"} className='text-gray-600 hover:text-gray-800 text-center text-sm hover:underline'>Contact</Link>
            <Link href={"#"} className='text-gray-600 hover:text-gray-800 text-center text-sm hover:underline'>Privacy Policy</Link>
            <Link href={"#"} className='text-gray-600 hover:text-gray-800 text-center text-sm hover:underline'>Terms of Use</Link>
        </div>

        <p className='text-gray-500 text-xs'>
            &copy; 2025 Early Blog. All rights reserved.
        </p>
      </div>
    </main>
  )
}

export default Footer
