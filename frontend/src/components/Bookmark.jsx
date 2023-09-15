import { useState } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useGlobalContext } from "context/context";

export default function Bookmark({ id, authorId, saveId, isSaved = false }) {
    const [saved, setSaved] = useState(false);

    const {
        saveBlog,
        unSaveBlog,
    } = useGlobalContext();

    const handleSave = () => {
        if (isSaved) {
            setSaved(false);
            unSaveBlog(saveId);
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