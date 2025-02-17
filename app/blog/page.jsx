"use client";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [blogs, setBlogs] = useState([])

  // const blogDetails = [
  //   {
  //     author: "John Mark",
  //     timestamp: "Sunday, 1 Jan 2024",
  //     title: "UX Review Presentations",
  //     body: "How to create compelling presentations that would leave your audience pleading for more and land your dream job throughout your career",
  //   },
  //   {
  //     author: "James Doe",
  //     timestamp: "Wednesday, 2 Feb 2023",
  //     title: "Full stack development",
  //     body: "How to create compelling presentations that would leave your audience pleading for more and land your dream job throughout your career",
  //   },
  //   {
  //     author: "Alison Andrews",
  //     timestamp: "Friday, 1 Jan 2023",
  //     title: "Blogging",
  //     body: "How to create compelling presentations that would leave your audience pleading for more and land your dream job throughout your career",
  //   },
  //   {
  //     author: "Alison Andrews",
  //     timestamp: "Friday, 1 Jan 2023",
  //     title: "Blogging",
  //     body: "How to create compelling presentations that would leave your audience pleading for more and land your dream job throughout your career",
  //   },
  // ];

  const fetchBlogs = async ()=>{
    try {
      const querySnapshot = await getDocs(collection(db, "Blogs"))
      const blogsData = []
      for(const blogDoc of querySnapshot.docs){
        const blog = {id:blogDoc.id, ...blogDoc.data()}
        // console.log(blog);
        
        // console.log(blog);      
        blogsData.push(blog)
        // console.log(blogsData);
        
      }
      setBlogs(blogsData)
      // console.log(blogs); 
      
    } catch (err) {
      console.error("Error fetching blogs", err)
      alert("Error fetching blogs")
    }
  }

  useEffect(()=>{
    fetchBlogs()
  }, [blogs])

  return (
    <main className="min-h-dvh p-2">
      <h1 className="text-center m-3 lg:my-7 text-3xl lg:text-5xl font-bold text-orange-500">
        Our Blogs
      </h1>
      <p className="text-lg text-center w-3/4 mx-auto text-gray-700 mb-5">
        Our blogs are written by trusted authors and well known writers so that
        we can provide you the best blogs and articles tailored to meet your
        needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-2 md:p-10">
        {blogs.map((blog, index) => (
          <Link key={index} href={"/blog/" + blog.id} className="space-y-2 group">
            <img src="/img.jpg" alt="Man reading a blog" />
            <div className="flex justify-between">
              <span className="text-blue-400 text-sm">{blog.author}</span>
              <span className="text-blue-400 text-sm">{blog.timestamp}</span>
            </div>
            <h1 className="font-bold text-lg">{blog.title}</h1>
            <p className="text-sm text-gray-600 line-clamp-3 group-hover:underline">
              {blog.body}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default page;
