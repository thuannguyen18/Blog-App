import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa"
import { AiFillHeart, AiOutlinePlus } from "react-icons/ai";


import { useGlobalContext } from "../../context/context";
import UserAvatar from "../user/UserAvatar";
import Loading from "../Loading";

function PostDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        getBlog,
        articleTitle,
        articleContent,
        deleteBlog,
        userNameBlog,
        userIdBlog,
        userId,
        userAvatar,
        otherUserAvatar,
        loading
    } = useGlobalContext();

    useEffect(() => {
        getBlog(id);
    }, []);

    const handleDelete = () => {
        deleteBlog(id);
    }

    const handleEdit = () => {
        navigate("/update", { state: id });
    }

    const buttons = userId === userIdBlog ? (
        <>
            <button className="flex items-center border ml-2 p-1 rounded hover:bg-zinc-500" onClick={handleEdit}>
                <FaPen className="mr-2" />
                <span>Edit Article</span>
            </button>
            <button className="flex items-center border border-red-500 rounded ml-2 p-1 hover:bg-red-500" onClick={handleDelete}>
                <FaTrashAlt className="mr-2" />
                <span>Delete Article</span>
            </button>
        </>
    ) : (
        <>
            <button className="flex items-center border ml-2 p-1 rounded hover:bg-zinc-500" onClick={handleEdit}>
                <AiOutlinePlus className="mr-1" />
                <span>Follow</span>
            </button>
            <button className="flex items-center border border-green-500 rounded ml-2 p-1 hover:bg-green-500" onClick={handleDelete}>
                <AiFillHeart className="mr-2" />
                <span className="tracking-wide">Like</span>
            </button>
        </>
    );

    let avatar;

    if (userId === userIdBlog && userAvatar)  {
        avatar = <UserAvatar width="w-10" height="h-10" /> 
    } else if (userId !== userIdBlog && otherUserAvatar) {
        avatar = <UserAvatar width="w-10" height="h-10" isOtherAvatar/>;
    } else {
        avatar = <UserAvatar width="w-10" height="h-10" isDefault />;
    }

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
        <>
            <div className="text-white blog-title">
                <div className="container mx-auto py-6 px-4 lg:w-2/3 lg:px-0">
                    <h1 className="text-4xl font-semibold">{articleTitle}</h1>
                    <span className="flex items-center mt-8">
                        {avatar}
                        <h3 className="ml-2">{userNameBlog}</h3>
                        <div className="ml-6 flex">
                            {buttons}
                        </div>
                    </span>
                </div>
            </div>
            <div className="container mx-auto px-4 lg:w-2/3 lg:px-0">
                <p className="text-xl align-middle">{articleContent}</p>
            </div>
        </>
    );
}

export default PostDetail;