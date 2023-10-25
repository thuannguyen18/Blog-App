import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlertModal from "components/AlertModal";
import UserAvatar from "components/user/UserAvatar";
import { useGlobalContext } from "context/context";
import { userInformation } from "constants";
import formatDate from "utils/formatDate";
import Bookmark from "components/Bookmark";

export default function UserInfo({ id, name, profilePath, createdAt }) {
    // Global State
    const { authorId, blogIdUpdate, openEditorMode, comments } = useGlobalContext();
    // Local State
    const [open, setOpen] = useState(false);
    const isUser = userInformation?.id === authorId;

    return (
        <React.Fragment>
            <div className="flex items-center mt-4 justify-between">
                <div className="flex items-center flex-1">
                    <UserAvatar width="w-10 lg:w-14" height="h-10 lg:h-14" isDefault={true} profilePicturePath={profilePath} />
                    <div className="ml-2">
                        <Link to={`/user/${id}`} className="text-sm text-black-150 font-bold block hover:underline">
                            {name}
                        </Link>
                        <span className="block text-xs text-gray-950">{formatDate(createdAt)}</span>
                    </div>
                </div>
                {isUser &&
                    <div>
                        <button className="transition border border-gray-250 text-gray-550 py-2 px-4 text-center rounded hover:bg-gray-500 hover:text-white">
                            <Link onClick={openEditorMode} to={`/blog/edit/${blogIdUpdate}`}>Update</Link>
                        </button>
                        <button
                            onClick={() => setOpen(true)}
                            className="transition border border-red-500 text-red-400 py-2 px-4 ml-3 rounded hover:bg-red-500 hover:text-white"
                        >
                            Delete
                        </button>
                    </div>
                }
            </div>
            <AlertModal open={open} setOpen={setOpen} />
        </React.Fragment>
    );
}