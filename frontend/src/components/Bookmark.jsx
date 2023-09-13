import { BsBookmark } from "react-icons/bs";
import { useGlobalContext } from "context/context";

export default function Bookmark({ id }) {
    const { saveBlog } = useGlobalContext();
    
    const handleSave = () => {
        saveBlog(id);
    }
    
    return (
        <button 
            className="h-[25px] w-[25px] flex justify-center items-center"
            onClick={handleSave}
        >
            <BsBookmark className="text-xl text-gray-650" />
        </button>
    );
}