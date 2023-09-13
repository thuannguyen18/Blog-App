import { BsBookmark } from "react-icons/bs";

export default function Bookmark() {
    return (
        <button className="h-[25px] w-[25px] flex justify-center items-center">
            <BsBookmark className="text-xl text-gray-650" />
        </button>
    );
}