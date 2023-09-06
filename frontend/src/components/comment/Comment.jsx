import React from "react";
import UserInfo from "components/user/UserInfo";
import { useGlobalContext } from "context/context";

export default function Comment({ commentId, content, userInfo }) {
    const { userId, userIdComment } = useGlobalContext();
    const { username, email, profilePicturePath } = userInfo;

    const handleDelete = () => {
        console.log(commentId);
    }

    return (
        <div className="group/item">
            <div className="flex items-center justify-between">
                <UserInfo
                    name={username}
                    email={email}
                    profilePath={profilePicturePath}
                />
                {userId === userIdComment &&
                    <div className="invisible group/edit group-hover/item:visible">
                        <button className="text-sm text-gray-600 rounded hover:bg-gray-350 py-2 px-3 group-hover/edit:text-gray-700">Update</button>
                        <button className="text-sm text-gray-600 rounded hover:bg-gray-350 py-2 px-3 group-hover/edit:text-gray-700" onClick={handleDelete}>Delete</button>
                    </div>
                }
            </div>
            <div className="px-2 mt-2 mb-10">
                {content}
            </div>
        </div>
    );
}