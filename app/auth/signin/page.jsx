"use server";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const page = async () => {
  const session = await auth()
  if (session) {
    redirect("/add-blog")
  }
  return (
    <main>
      <div className="h-dvh flex flex-col gap-5 items-center md:pt-20 pt-5">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Sign In to <span className="text-orange-500">Early Blog</span>
        </h1>
        <section className="shadow-2xl p-4 rounded-lg flex flex-col gap-5 max-md:w-full">

          <form 
          action={async ()=>{
            "use server"
            await signIn("google")
          }}
          className="flex items-center max-md:justify-center gap-2 bg-blue-600 text-white text-lg py-2 px-4 rounded-lg max-md:w-full">
            <button className="flex items-center max-md:justify-center gap-2 " >
              <span>Continue with Google</span>
              <FaGoogle />
            </button>
          </form>
          <form 
          action={async ()=>{
            "use server"
            await signIn("github")
          }}
          className="flex items-center max-md:justify-center gap-2 bg-orange-600 text-white text-lg py-2 px-4 rounded-lg max-md:w-full">
            <button className="flex items-center max-md:justify-center gap-2 " >
              <span>Continue with Github</span>
              <FaGithub />
            </button>
          </form>
          <button className="flex items-center max-md:justify-center gap-2 bg-red-600 text-white text-lg py-2 px-4 rounded-lg max-md:w-full">
            <span>Continue with Twitter</span>
            <FaXTwitter />
          </button>
        </section>
      </div>
    </main>
  );
};

export default page;
