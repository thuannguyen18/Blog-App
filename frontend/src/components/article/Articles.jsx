import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import Bookmark from "components/Bookmark";
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

    console.log(likes);

    return (
        <div className="grid lg:grid-cols-9 mb-12">
            <Link className="max-h-52 lg:col-span-3 rounded" to={`/blog/${id}`}>
                {picturePath && <img className="rounded object-cover w-full h-full border border-gray-200 " src={`http://localhost:3500/assets/${picturePath}`} alt="thumbnail" />}
            </Link>
            <div className="lg:col-span-6 flex flex-col justify-between lg:pl-4">
                <div className="flex items-center justify-between mt-1 mb-2 lg:mt-0">
                    <Link className="text-sm text-sky-500 hover:text-sky-600 uppercase" to={`/category/${category}`}>{category}</Link>
                    <Bookmark id={id} />
                </div>
                <div className="grow">
                    <Link className="block" to={`/blog/${id}`}>
                        <h2 className="font-semibold mt-1 lg:text-lg">{title}</h2>
                    </Link>
                    <p className="paragraph-min-line text-sm mt-2">
                        {subTitle}
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <UserAvatar width="w-12" height="h-12" isDefault={true} profilePicturePath={profilePicturePath} />
                        <Link className="text-sm font-semibold block ml-2" to={`/user/${userId}`}>{userName}</Link>
                    </div>
                    <div className="flex justify-evenly">
                        <span className="flex items-center">
                            <BiLike className="text-lg text-gray-650" />
                            <span className="ml-1 text-sm">{likes ? likes : "0"}</span>
                        </span>
                        <span className="hidden items-center ml-4 md:flex">
                            <HiOutlineChatBubbleOvalLeftEllipsis className="text-lg text-gray-650" />
                            <span className="ml-1 text-sm">0</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}