import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { token } from "constants";
import Bookmark from "components/Bookmark";
import UserAvatar from "components/user/UserAvatar";
import Reactions from "components/Reactions";
import { useGlobalContext } from "context/context";
import formatDate from "utils/formatDate";

export default function Article({ topic, authorId, saveId, isSaved, isLiked }) {
    const navigate = useNavigate();

    // Global State and Props
    const { _id, title, subTitle, category, picturePath, likes, createdAt } = topic;
    const { username, profilePicturePath, _id: userId } = topic.userId;
    const { likeBlog } = useGlobalContext();

    // Local State
    const [isActive, setIsActive] = useState(isLiked);
    const [likeCount, setLikeCount] = useState(likes.length || 0);

    // Author's informaiton in save page
    let authorName, authorProfilePicturePath, author;
    if (authorId && saveId) {
        const { username, profilePicturePath, _id } = authorId;
        author = _id;
        authorName = username;
        authorProfilePicturePath = profilePicturePath
    }

    // Like & Unlike Blog
    const handleLike = () => {
        if (!token) {
            navigate("/login");
            return;
        }

        if (isActive) {
            setLikeCount(prev => prev - 1);
        } else {
            setLikeCount(prev => prev + 1);
        }

        setIsActive(!isActive);
        likeBlog(_id);
    }

    return (
        <div className="grid lg:grid-cols-9 mb-12">
            <Link className="max-h-52 lg:col-span-3 rounded" to={`/blog/${_id}`}>
                {picturePath && <img className="rounded object-cover w-full h-full border border-gray-200 " src={`${process.env.REACT_APP_BASE_URL}/assets/${picturePath}`} alt="thumbnail" />}
            </Link>
            <div className="lg:col-span-6 flex flex-col justify-between lg:pl-4">
                <div className="flex items-center justify-between mt-1 mb-2 lg:mt-0">
                    <Link className="text-sm text-sky-500 hover:text-sky-600 uppercase" to={`/category/${category}`}>{category}</Link>
                    {token && <Bookmark
                        id={_id}
                        authorId={userId}
                        isSaved={isSaved}
                        saveId={saveId} />
                    }
                </div>
                <div className="grow">
                    <Link className="block" to={`/blog/${_id}`}>
                        <h2 className="font-semibold mt-1 lg:text-lg">{title}</h2>
                    </Link>
                    <p className="paragraph-min-line text-sm mt-2">
                        {subTitle}
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <UserAvatar width="w-12" height="h-12" profilePicturePath={profilePicturePath || authorProfilePicturePath} />
                        <div className="flex items-center items-baseline">
                            <Link className="text-sm font-semibold block ml-2" to={`/user/${userId || author}`}>{username || authorName}</Link>
                            <span className="text-xs text-gray-950 ml-1">&#x2022; {formatDate(createdAt)}</span>
                        </div>
                    </div>
                    <Reactions
                        likeCount={likeCount}
                        isLiked={isActive}
                        handleLike={handleLike}
                    />
                </div>
            </div>
        </div>
    );
}