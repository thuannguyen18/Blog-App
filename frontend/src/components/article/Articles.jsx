import { Link } from "react-router-dom";
import UserAvatar from "components/user/UserAvatar";

export default function Article({ id, userId, title, subTitle, category, userName, profilePicturePath, picturePath }) {
    return (
        <div className="grid lg:grid-cols-8 mb-12">
            <Link className="lg:col-span-2" to={`/blog/${id}`}>
                {picturePath && <img className="rounded object-cove h-full" src={`http://localhost:3500/assets/${picturePath}`} alt="thumbnail" />}
            </Link>
            <div className="lg:col-span-6 flex flex-col justify-between lg:pl-4">
                <Link className="text-sm text-sky-500 hover:text-sky-600" to="/category">{category}</Link>
                <div className="grow">
                    <Link className="block" to={`/blog/${id}`}>
                        <h2 className="font-semibold mt-1 lg:text-lg">{title}</h2>
                    </Link>
                    <p className="text-sm mt-2">
                        {subTitle}
                    </p>
                </div>
                <div className="flex items-center mt-4">
                    <UserAvatar width="w-10" height="h-10" isDefault={true} profilePicturePath={profilePicturePath} />
                    <Link className="text-sm font-semibold block ml-2" to={`/user/${userId}`}>{userName}</Link>
                </div>
            </div>
        </div>
    );
}