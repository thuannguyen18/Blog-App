import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa"

import { useGlobalContext } from "../../context/context";
import UserAvatar from "../user/UserAvatar";

function PostDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        getBlog,
        articleTitle,
        articleContent,
        deleteBlog,
        userName
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

    return (
        <>
            <div className="text-white blog-title">
                <div className="container mx-auto py-6 lg:w-2/3">
                    <h1 className="text-4xl font-semibold">{articleTitle}</h1>
                    <span className="flex items-center mt-8">
                        <UserAvatar width="w-10" height="h-10" />
                        <h3 className="ml-2">{userName}</h3>
                        <div className="ml-6 flex">
                            <button className="flex items-center border ml-2 p-1 rounded hover:bg-zinc-500" onClick={handleEdit}>
                                <FaPen className="mr-2" />
                                <span>Edit Article</span>
                            </button>
                            <button className="flex items-center border border-red-500 rounded ml-2 p-1 hover:bg-red-500" onClick={handleDelete}>
                                <FaTrashAlt className="mr-2" />
                                <span>Delete Article</span>
                            </button>
                        </div>
                    </span>
                </div>
            </div>
            <div className="container mx-auto lg:w-2/3">
                <p className="text-xl align-middle">{articleContent}</p>
            </div>
        </>
    );
}

export default PostDetail;