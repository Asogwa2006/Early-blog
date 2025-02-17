import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Early Blog</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Early Blog is a platform dedicated to empowering writers and storytellers to share their thoughts, experiences, and knowledge with the world. Our goal is to create an engaging community where ideas flow freely, and everyone has a voice.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Whether you're an aspiring blogger or an experienced writer, Early Blog provides a user-friendly space to express yourself. Join our growing community and start sharing your story today!
        </p>
        <a href="/contact" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">Get in Touch</a>
      </div>
    </div>
  );
};

export default AboutPage;
