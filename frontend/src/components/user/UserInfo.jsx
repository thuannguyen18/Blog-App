import { Link } from "react-router-dom";
import UserAvatar from "components/user/UserAvatar";

export default function UserInfo({ id, name, email, profilePath }) {
    return (
        <div className="flex items-center mt-4">
            <UserAvatar width="w-10 lg:w-14" height="h-10 lg:h-14" isDefault={true} profilePicturePath={profilePath} />
            <div className="ml-2">
                <Link to={`/user/${id}`} className="text-sm font-semibold block hover:underline">
                    {name}
                </Link>
                <span className="block text-xs">@{email.replace("@gmail.com", "")}</span>
            </div>
        </div>
    );
}