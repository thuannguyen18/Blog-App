import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

export default function Reactions({ likeCount, isLiked = false, handleLike }) {
    const heartIcon = false ?
        <FcLike className="text-lg cursor-pointer text-gray-650" onClick={handleLike} /> :
        <FcLikePlaceholder className="text-lg cursor-pointer text-gray-650" onClick={handleLike} />

    return (
        <div className="flex justify-evenly">
            <span className="flex items-center">
                {heartIcon}
                <span className="ml-1 text-sm">{likeCount}</span>
            </span>
            <span className="hidden items-center ml-4 md:flex">
                <HiOutlineChatBubbleOvalLeftEllipsis className="text-lg text-gray-650" />
                <span className="ml-1 text-sm">0</span>
            </span>
        </div>
    );
}