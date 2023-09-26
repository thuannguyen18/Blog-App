import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { token } from "constants";
import Bookmark from "components/Bookmark";
import UserAvatar from "components/user/UserAvatar";
import Reactions from "components/Reactions";

export default function Article({ topic }) {
    const {
        id,
        title,
        subTitle,
        category,
        picturePath,
        likes,
        isSaved = false,
        saveId,
        likeBlog,
        isLiked = false
    } = topic;

    const { username, profilePicturePath, _id: userId } = topic.userId;

    const [like, setLike] = useState(likes || 0)
    const [isLike, setIsLike] = useState(false);
    const navigate = useNavigate();

    const handleLike = () => {
        if (!token) {
            navigate("/login");
            return;
        }

        if (isLike) {
            setLike(prev => prev - 1);
            setIsLike(false);
            // unlike(id);
            return;
        }

        setLike(prev => prev + 1);
        setIsLike(true);
        likeBlog(id);
    }

    return (
        <div className="grid lg:grid-cols-9 mb-12">
            <Link className="max-h-52 lg:col-span-3 rounded" to={`/blog/${id}`}>
                {picturePath && <img className="rounded object-cover w-full h-full border border-gray-200 " src={`http://localhost:3500/assets/${picturePath}`} alt="thumbnail" />}
            </Link>
            <div className="lg:col-span-6 flex flex-col justify-between lg:pl-4">
                <div className="flex items-center justify-between mt-1 mb-2 lg:mt-0">
                    <Link className="text-sm text-sky-500 hover:text-sky-600 uppercase" to={`/category/${category}`}>{category}</Link>
                    {token && <Bookmark
                        id={id}
                        authorId={userId}
                        isSaved={isSaved}
                        saveId={saveId} />
                    }
                </div>
                <div className="grow">
                    <Link className="block" to={`/blog/${id}`}>
                        <h2 className="font-semibold mt-1 lg:text-lg">{title}</h2>
                    </Link>
                    <p className="paragraph-min-line text-sm mt-2">
                        {subTitle}
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <UserAvatar width="w-12" height="h-12" profilePicturePath={profilePicturePath} />
                        <Link className="text-sm font-semibold block ml-2" to={`/user/${userId}`}>{username}</Link>
                    </div>
                    <Reactions
                        likeCount={like}
                        handleLike={handleLike}
                        isLiked={isLiked}
                    />
                </div>
            </div>
        </div>
    );
}