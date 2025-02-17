"use server"
import { db } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";

async function fetchBlog(id) {
    if (!id) return null

    try {
        // create a document refeence
        const docRef = doc(db, "Blogs", id)
        const blogDoc = await getDoc(docRef)
        
        if (blogDoc.exists()) {
            return {id, ...blogDoc.data()}
        }
        return null
    } catch (e) {
        console.error("Error fetching  blog", e)
        return null
    }
}

export default async function BlogDetailPage({params}) {
    const blog = await fetchBlog(params.id)
    if (!blog) {
        return (
            <main>
                <h1>Blog post not found</h1>
                <Link href={"/blog"}>Back to Blogs</Link>
            </main>
        )
    }

    return(
        <main>
            <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 my-5">{blog.title}</h1>
            <p className="text-lg mb-5 px-10">{blog.body}</p>
            <div className="flex items-center justify-between px-10 py-5">
                <p className="text-sm text-gray-700 font-semibold">By {blog.author}</p>
                <p className="text-sm text-gray-700 font-semibold">On {blog.timestamp}</p>
            </div>
        </main>
    )
}