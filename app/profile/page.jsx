"use server"
import { auth, signOut } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { CiLogout } from "react-icons/ci";

const page = async () => {
  const session = await auth()
  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <main className='h-dvh'>
      <div className='shadow-lg rounded-lg max-w-2xl p-5 m-2 mx-auto space-y-5'>
        <img src={session?.user?.image} alt={session?.user?.name} className='w-60 h-60 rounded-full mx-auto' />
        <h1 className='font-semibold text-center text-2xl md:text-3xl text-gray-600'>
          {session?.user?.name}
        </h1>

        <form action={async ()=>{
          "use server"
          await signOut()
          redirect("/auth/signin")
        }}>
          <button type='submit' className='flex items-center gap-2 bg-red-500 text-white font-semibold text-lg rounded-md px-7 py-2 mx-auto'>
            <CiLogout/>
            Log Out
          </button>
        </form>
      </div>
    </main>
  )
}

export default page
