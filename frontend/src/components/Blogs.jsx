import { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

import UserAvatar from "./user/UserAvatar";
import Loading from "./Loading";


function Blogs() {
    const { 
        userName,
        blogs,
        getAllBlogs,
    } = useGlobalContext();

    useEffect(() => {
      getAllBlogs();
    }, []);

    const renderBlogs = blogs.length < 1 ? (<div>No blogs</div>) : blogs.map(blog => (
        <article className="border-b py-5 px-4 lg:px-0" key={blog._id}>
            <div className="flex justify-between">
                <span className="flex items-center">
                    <UserAvatar width="w-10" height="h-10" />
                    <h3 className="ml-2">{userName}</h3>
                </span>
                <button className="flex justify-center items-center border rounded w-12">
                    <AiFillHeart className="mr-1" />
                    <span className="">0</span>
                </button>
            </div>
            <div className="mt-2">
                <h2 className="text-2xl font-semibold">{blog.title}</h2>
                <p className="text-lg mt-2">
                    {blog.content.substring(0, 200)}... 
                    <Link
                        className="font-semibold"
                        to={`/blog/${blog._id}`}
                    >
                        Read more
                    </Link>
                </p>

            </div>
        </article>
    ));
    
    return (
        <div className="container mx-auto lg:w-2/3">
            {renderBlogs}
        </div>
    );
}

export default Blogs;