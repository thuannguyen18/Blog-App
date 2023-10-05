import { useState } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useGlobalContext } from "context/context";

export default function Bookmark({ id, authorId, saveId, isSaved }) {
    const { saveBlog, unSaveBlog } = useGlobalContext();
    const [saved, setSaved] = useState(false);
    
    const handleSave = () => {
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