import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../context/context";
import UserAvatar from "./user/UserAvatar";

function HomePage() {
    const { getAllBlogs, blogsPublic, isAuthenticated } = useGlobalContext();

    useEffect(() => {
        getAllBlogs();
    }, []);

    const renderBlogs = blogsPublic.length < 1 ? (<div>No blogs</div>) : blogsPublic.map(blog => (
        <article className="border-b py-5 px-4 lg:px-0" key={blog._id}>
            <div className="flex justify-between">
                <span className="flex items-center">
                    <UserAvatar width="w-10" height="h-10" isDefault={true} />
                    <h3 className="ml-2">{blog.user_id.username}</h3>
                </span>
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

    return (
        <section className="bg-green-600 h-44">
            <div className="container mx-auto w-2/3 text-center pt-8">
                <h1 className="text-white text-5xl font-semibold">MyBlog</h1>
                <p className="text-white text-2xl mt-4">A place to share your knowledge.</p>
            </div>
            <div className="container mx-auto lg:w-2/3 mt-16">
                {renderBlogs}
            </div>
        </section>
    )
}

export default HomePage;