import { Link } from "react-router-dom";
import UserAvatar from "components/user/UserAvatar";

export default function UserInfo() {
    return (
        <div className="flex items-center mt-4">
            <UserAvatar width="w-10 lg:w-14" height="h-10 lg:h-14" isDefault={true} profilePicturePath={"p9.jpeg"} />
            <div className="ml-2">
                <Link className="text-sm font-semibold block hover:underline">
                    Chloe Châu
                </Link>
                <span className="block text-xs">@chloechau94</span>
            </div>
        </div>
    );
}