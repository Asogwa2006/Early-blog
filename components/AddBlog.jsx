"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useSession } from "next-auth/react";
import { FiLoader } from "react-icons/fi";

const AddBlog = () => {
  const {data:session} = useSession();
  const [loading, setLoading] = useState(false)
  const iv = {
    title: "",
    body: "",
  };
  const vs = Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .min(5, "Mininum of 5 characters")
      .max(30, "Maximum of 30 characters"),
    body: Yup.string()
      .required("Blog post is required")
      .min(20, "Minimum of 20 characters"),
  });

  const handleSubmit = async (values, {resetForm}) => {
    try {
      setLoading(true)
      // create an object to be sent to the db
      const blogPost = {
        title: values.title,
        body: values.body,
        author: session?.user?.name,
        timestamp: new Date().toLocaleDateString(),
      };

      const docRef = collection(db, "Blogs");
      await addDoc(docRef, blogPost);
      resetForm()
      alert("Post successful");
    } catch (err) {
      console.log("Failed post", err);
      alert("Blog post failed");
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <main className="min-h-dvh">
      <h1 className="text-center m-3 lg:mt-5 text-2xl md:text-3xl font-bold text-orange-500">
        Contribute to the Blogging Community
      </h1>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
          <Formik
            initialValues={iv}
            validationSchema={vs}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-4">
              <div>
                <Field
                  type="text"
                  name="title"
                  placeholder="Blog title..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <ErrorMessage
                  component="p"
                  name="title"
                  className="text-red-600 text-xs mt-1"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="body"
                  placeholder="Write your blog post..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <ErrorMessage
                  component="p"
                  name="body"
                  className="text-red-600 text-xs mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-center bg-orange-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-orange-600 transition duration-300"
              >
                {
                  loading ? <FiLoader className="animate-spin mx-auto text-center text-2xl"/> : "Post Blog"
                }
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default AddBlog;
