import UserAvatar from "./user/UserAvatar";
import { Link } from "react-router-dom";

export default function UserSearchResult({ result }) {
    return (
        <div className="m-3 p-3 flex items-center border border-gray-850 rounded shadow-md">
            <UserAvatar height="h-[48px]" width="w-[48px]" profilePicturePath={result.profilePicturePath} />
            <Link className="ml-4 font-bold" to={`/user/${result._id}`}>{result.username}</Link>
        </div>
    );
}