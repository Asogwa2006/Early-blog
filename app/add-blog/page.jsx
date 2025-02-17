"use server"
import { auth } from '@/auth'
import AddBlog from '@/components/AddBlog'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await auth()
  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <main>
      <AddBlog/>
    </main>
  )
}

export default page
