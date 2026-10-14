'use server'
import BlogTitle from "@/app/blog/blog-title";
import {BlogTitleType} from "@/app/blog/blog-title-type";

export default async function Blog() {
    const data = await fetch("https://api.vercel.app/blog");
    const posts = await data.json()
    return (
        <div>
            <h1>My Blog</h1>
            {posts.map((post: BlogTitleType) => (
                <BlogTitle key={post.id} post={post}/>
            ))}
        </div>
    )
}