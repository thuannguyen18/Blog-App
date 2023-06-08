import { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import 'tippy.js/dist/tippy.css';

import UserAvatar from "./UserAvatar";
import Loading from "../Loading";
import { useGlobalContext } from "../../context/context";

function User() {
    const {
        userName,
        userEmail,
        getUserBlog,
        userBlogs,
        loading,
        userId,
    } = useGlobalContext();
    // const hiddenFileInput = useRef(null);


    // const handleClick = () => {
    //     hiddenFileInput.current.click();
    // }

    // const handleChange = (e) => {
    //     const fileUploaded = e.target.files[0];
    //     uploadFile(URL.createObjectURL(fileUploaded));
    // };

    useEffect(() => {
        getUserBlog(userId);
    }, []);

    console.log(userBlogs);

    const renderBlogs = userBlogs.length < 1 ? (<div>No blogs.</div>) : userBlogs.map(item => (
        <article className="border-b py-5" key={item._id}>
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
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-lg mt-2">
                    {item.content.substring(0, 200)}... 
                    <Link
                        className="font-semibold"
                        to={`/blog/${item._id}`}
                    >
                        Read more
                    </Link>
                </p>

            </div>
        </article>
    ));

    return (
        <div className="flex items-center justify-center lg:mt-4">
            <div className="w-full lg:w-2/3">
                <div className="w-full h-60 bg-gray-200 rounded-b-xl lg:rounded-3xl"></div>
                <UserAvatar width="w-36" height="h-36" isProfile />
                <div className="text-center pt-16 mb-8">
                    <h2 className="text-2xl font-semibold">{userName}</h2>
                    <h3 className="">{userEmail}</h3>
                </div>
                <div className="px-4 lg:px-0">
                    <div className="border-b">
                    </div>
                    {loading ? <div className="flex justify-center mt-10"><Loading /></div> : renderBlogs}
                </div>
            </div>
        </div>
    );
}

export default User;