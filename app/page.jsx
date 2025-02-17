"use client";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    try {
      const blogsRef = collection(db, "Blogs");
      const q = query(blogsRef, orderBy("timestamp", "desc"), limit(3));
      const querySnapshot = await getDocs(q);

      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));  
      setBlogs(blogsData);
      console.log(blogs);
    } catch (err) {
      console.error("Error fetching blogs", err);
      alert("Error fetching blogs");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [blogs]);
  return (
    <main>
      <div className="h-dvh bg-[url('/bg1.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="h-dvh bg-black/60 flex justify-center md:items-center pt-16">
          <div className="flex flex-col gap-10 p-1">
            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl text-center font-bold">
              Welcome to <span className="text-orange-500">Early Blog</span>
            </h1>
            <p className="text-white md:text-2xl text-lg lg:w-1/2 text-center mx-auto">
              Dive into a world of inspiring stories, insightful articles, and
              trending topics that spark curiosity
            </p>
            <div className="flex justify-between max-md:flex-col max-md:gap-3 items-center lg:w-1/2 mx-auto max-md:w-full p-1">
              <Link
                href={"/blog"}
                className="text-black bg-orange-500 rounded-full py-4 px-8 font-semibold hover:bg-orange-600 transition-all max-md:w-full text-center"
              >
                Read Our Blogs
              </Link>
              <Link
                href={"/add-blog"}
                className="text-orange-500 bg-white py-4 px-8 rounded-full font-semibold hover:bg-gray-200 transition-all max-md:w-full text-center"
              >
                Add Yours
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3">
        <h1 className="font-semibold text-gray-700 text-center text-3xl py-10">Recent Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-2 md:p-10">
        {blogs.map((blog, index) => (
          <Link key={index} href={"/blog/" + blog.id}className="space-y-2 group">
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
      </div>
      <div className="border-t-2 border-blue-500 m-4" />

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Technology', 'Lifestyle', 'Travel', 'Food'].map((category) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{category}</h3>
                <p className="text-gray-600">Explore our latest {category.toLowerCase()} articles</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-orange-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for weekly updates on the best stories and trends</p>
          <div className="flex max-w-md mx-auto gap-4 max-md:flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Early Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Writers</h3>
              <p className="text-gray-600">Content created by passionate experts in their fields</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trending Topics</h3>
              <p className="text-gray-600">Stay ahead with the latest trends and insights</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">Join discussions and share your thoughts</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default page;
