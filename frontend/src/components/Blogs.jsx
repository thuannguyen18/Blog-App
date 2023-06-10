import { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

import UserAvatar from "./user/UserAvatar";
import Loading from "./Loading";


function Blogs() {
    const {
        userAvatar,
        userId,
        blogs,
        getAllBlogs,
        loading
    } = useGlobalContext();

    useEffect(() => {
        getAllBlogs();
    }, []);

    const renderBlogs = blogs.length < 1 ? (<div>No blogs</div>) : blogs.map(blog => (
        <article className="border-b py-5 px-4 lg:px-0" key={blog._id}>
            <div className="flex justify-between">
                <span className="flex items-center">
                    {(blog.user_id._id === userId && userAvatar) || blog.user_id.profilePictureURL ? <img
                        className="w-10 h-10 rounded-full"
                        src={blog.user_id.profilePictureURL}
                        alt="avatar"
                    /> :
                        <UserAvatar width="w-10" height="h-10" isDefault={true} />
                    }
                    <h3 className="ml-2">{blog.user_id.username}</h3>
                </span>
                <button className="flex justify-center items-center border border-green-600 rounded w-12">
                    <AiOutlineHeart className="mr-1 text-green-600" />
                    <span className="text-green-600">0</span>
                </button>
            </div>
            <div className="mt-2">
                <h2 className="text-2xl font-semibold text-blue-700">{blog.title}</h2>
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

    if (loading) {
        return (
            <section className="container mx-auto py-6 px-4 lg:w-2/3 lg:px-0">
                <span className="flex justify-center items-center">
                    <Loading />
                </span>
            </section>
        );
    }

    return (
        <div className="container mx-auto lg:w-2/3">
            {renderBlogs}
        </div>
    );
}

export default Blogs;