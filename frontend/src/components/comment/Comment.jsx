import React, { useState } from "react";
import UserInfo from "components/user/UserInfo";
import { useGlobalContext } from "context/context";
import { userInformation } from "constants";

export default function Comment({ comment }) {
    // Global State
    const { deleteComment, updateComment } = useGlobalContext();
    const { _id, username, email, profilePicturePath } = comment.userId;
    
    // Local State
    const [isUpdate, setIsUpdate] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [contentUpdate, setContentUpdate] = useState(comment.content);

    // Delete comment
    const handleDelete = () => {
        deleteComment(comment._id, comment.blogId);
    }

    // Update comment
    const handleUpdateMode = () => {
        setIsUpdateMode(!isUpdateMode);
    }

    const handleUpdate = () => {
        updateComment(comment._id, contentUpdate);
        setIsUpdate(true);
        setIsUpdateMode(false);
    }

    return (
        <div className="group/item">
            <div className="flex items-center justify-between">
                <UserInfo
                    id={_id}
                    name={username}
                    email={email}
                    profilePath={profilePicturePath}
                    createdAt={comment.createdAt}
                />
                {userInformation?.id === _id &&
                    <div className="invisible group/edit group-hover/item:visible">
                        <button className="text-sm text-gray-600 rounded hover:bg-gray-350 py-2 px-3 group-hover/edit:text-gray-700" onClick={handleUpdateMode}>Update</button>
                        <button className="text-sm text-gray-600 rounded hover:bg-gray-350 py-2 px-3 group-hover/edit:text-gray-700" onClick={handleDelete}>Delete</button>
                    </div>
                }
            </div>
            <div className="px-2 mt-2 mb-8">
                {isUpdate ? contentUpdate : comment.content}
            </div>
            {isUpdateMode && <div className="flex items-center border-y border-gray-200 mb-4 py-4">
                <textarea
                    className="leading-normal resize-none w-full text-sm font-medium placeholder-gray-300 focus:outline-none focus:bg-white"
                    name="body"
                    placeholder="Type your feeling..."
                    required
                    value={contentUpdate}
                    onChange={(e) => setContentUpdate(e.target.value)}
                ></textarea>
                <button className="text-sm right-0 hover:bg-gray-350 py-1 px-2 rounded ml-2" onClick={handleUpdate}>Update</button>
            </div>}
        </div>
    );
}