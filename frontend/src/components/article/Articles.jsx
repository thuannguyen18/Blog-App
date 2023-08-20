import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import UserAvatar from "components/user/UserAvatar";

export default function Article({
    id,
    userId,
    title,
    subTitle,
    category,
    userName,
    profilePicturePath,
    picturePath,
    likes
}) {
    return (
        <div className="grid lg:grid-cols-9 mb-12">
            <Link className="max-h-48 lg:col-span-3 border border-gray-200 rounded-sm" to={`/blog/${id}`}>
                {picturePath && <img className="rounded object-cover w-full h-full" src={`http://localhost:3500/assets/${picturePath}`} alt="thumbnail" />}
            </Link>
            <div className="lg:col-span-6 flex flex-col justify-between lg:pl-4">
                <Link className="text-sm text-sky-500 hover:text-sky-600 uppercase mt-1 lg:mt-0" to="/category">{category}</Link>
                <div className="grow">
                    <Link className="block" to={`/blog/${id}`}>
                        <h2 className="font-semibold mt-1 lg:text-lg">{title}</h2>
                    </Link>
                    <p className="paragraph-min-line text-sm mt-2">
                        {subTitle}
                    </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                        <UserAvatar width="w-10" height="h-10" isDefault={true} profilePicturePath={profilePicturePath} />
                        <Link className="text-sm font-semibold block ml-2" to={`/user/${userId}`}>{userName}</Link>
                    </div>
                    <div className="flex items-center">
                        <BiLike />
                        <span className="ml-2 text-sm">{likes}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}