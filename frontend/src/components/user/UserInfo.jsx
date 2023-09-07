import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlertModal from "components/AlertModal";
import UserAvatar from "components/user/UserAvatar";
import { useGlobalContext } from "context/context";

export default function UserInfo({ id, name, email, profilePath }) {
    const userInformation = JSON.parse(localStorage.getItem("user_information"));
    const { userId, authorId, blogIdUpdate } = useGlobalContext();
    const [open, setOpen] = useState(false);

    console.log(blogIdUpdate);

    return (
        <React.Fragment>
            <div className="flex items-center mt-4 justify-between">
                <div className="flex items-center">
                    <UserAvatar width="w-10 lg:w-14" height="h-10 lg:h-14" isDefault={true} profilePicturePath={profilePath} />
                    <div className="ml-2">
                        <Link to={`/user/${id}`} className="text-sm font-semibold block hover:underline">
                            {name}
                        </Link>
                        <span className="block text-xs">@{email.replace("@gmail.com", "")}</span>
                    </div>
                </div>
                {userInformation?.id === authorId &&
                    <div className="">
                        <Link to={`/blog/edit/${blogIdUpdate}`} className="border border-gray-500 text-gray-400 py-2 px-4 text-center rounded hover:bg-gray-500 hover:text-white">Update</Link>
                        <button
                            onClick={() => setOpen(true)}
                            className="border border-red-500 text-red-400 py-2 px-4 ml-3 rounded hover:bg-red-500 hover:text-white"
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