import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "context/context";
import Article from "components/Article";
import Banner from "components/Banner";
import UserAvatar from "components/user/UserAvatar";

export default function Home() {
    const { getAllBlogs, blogsPublic, isAuthenticated } = useGlobalContext();

    useEffect(() => {
        getAllBlogs();
    }, []);

    const renderBlogs = blogsPublic.length < 1 ? (<div>No blogs</div>) : blogsPublic.map(blog => (
        // <article className="border-b py-5 px-4 lg:px-0" key={blog._id}>
        //     <div className="flex justify-between">
        //         <span className="flex items-center">
        //             <UserAvatar width="w-10" height="h-10" isDefault={true} />
        //             <h3 className="ml-2">{blog.user_id.username}</h3>
        //         </span>
        //     </div>
        //     <div className="mt-2">
        //         <h2 className="text-2xl font-semibold text-green-700">{blog.title}</h2>
        //         <p className="text-lg mt-2">
        //             {blog.content.substring(0, 200)}...
        //             <Link
        //                 className="font-semibold"
        //                 to={`/blog/${blog._id}`}
        //             >
        //                 Read more
        //             </Link>
        //         </p>

        //     </div>
        // </article>
        <Article
            key={blog._id}
            id={blog._id}
            title={blog.title}
            content={blog.content}
            userName={blog.user_id.username}
        />
    ));

    return (
        <div className="container mx-auto lg:w-2/3">
            <Banner />
            <div className="mt-12 grid grid-cols-2 gap-x-20 gap-y-10">
                {renderBlogs}
            </div>
        </div>
    )
}