import { Link } from "react-router-dom";
import moment from "moment";
import formatDate from "utils/formatDate";
import UserAvatar from "components/user/UserAvatar";

export default function LatestArticle({ article }) {
    const { _id, username, profilePicturePath } = article.userId;

    return (
        <article className="md:col-span-1 grid grid-cols-12">
            <Link className="md:max-h-28 lg:max-h-36 col-span-4 rounded" to={`/blog/${article._id}`}>
                {article.picturePath &&
                    <img
                        className="rounded object-cover w-full h-full md:h-28 lg:h-36 border border-gray-200"
                        src={`http://localhost:3500/assets/${article.picturePath}`}
                        alt="thumbnail"
                    />
                }
            </Link>
            <div className="col-span-8 pl-4 flex flex-col">
                <Link className="text-xs text-sky-500 block uppercase hover:text-sky-600" to={`/category/${article.category}`}>
                    {article.category}
                </Link>
                <div className="grow mt-2">
                    <Link to={`/blog/${article._id}`}>
                        <h2 className="text-sm font-semibold lg:text-base">{article.title}</h2>
                    </Link>
                    <p className="hidden lg:block text-xs mt-2">
                        {article.subTitle.substring(0, 60)}...
                    </p>
                </div>
                <div className="flex items-center mt-2">
                    <UserAvatar
                        width="w-7"
                        height="h-7"
                        isDefault={true}
                        profilePicturePath={profilePicturePath}
                    />
                    <div className="flex items-center items-baseline">
                        <Link className="text-sm font-semibold block ml-2" to={`/user/${_id}`}>{username}</Link>
                        <span className="hidden md:block text-xs text-gray-950 ml-1">&#x2022; {formatDate(article.createdAt)}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}