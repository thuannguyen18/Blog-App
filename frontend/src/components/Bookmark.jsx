import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useGlobalContext } from "context/context";
import { token } from "constants";

export default function Bookmark({ id, authorId, saveId, isSaved }) {
    const navigate = useNavigate();
    // Global State
    const { saveBlog } = useGlobalContext();
    // Local State
    const [saved, setSaved] = useState(false);
    
    // Save blog
    const handleSave = () => {
        if (!token) {
            navigate("/login");
            return;
        }

        if (isSaved || saved) {
            setSaved(false);
            saveBlog(id, authorId, saveId);
            return;
        }
        setSaved(true);
        saveBlog(id, authorId);
    }

    return (
        <button
            className="h-[25px] w-[25px] flex justify-center items-center "
            onClick={handleSave}
        >
            {isSaved || saved ?
                <BsFillBookmarkFill className="text-xl text-gray-650" /> :
                <BsBookmark className="text-xl text-gray-650" />
            }
        </button>
    );
}