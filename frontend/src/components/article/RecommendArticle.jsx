import { Link } from "react-router-dom";
import UserAvatar from "components/user/UserAvatar";

export default function RecommendArticle({ article }) {
    const { _id, username, profilePicturePath } = article.user;

    return (
        <article className="grid grid-cols-2 md:grid-cols-1 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <Link className="max-h-28 md:max-h-52 lg:max-h-44  rounded md:mr-0 mr-2" to={`/blog/${article._id}`}>
                {article.picturePath &&
                    <img
                        className="rounded object-cover w-full h-28 md:h-52 lg:h-44 border border-gray-200"
                        src={`${process.env.REACT_APP_BASE_URL}/assets/${article.picturePath}`}
                        alt="thumbnail"
                    />
                }
            </Link>
            <div className="grow flex flex-col justify-between">
                <Link to={`/blog/${article._id}`}>
                    <h2 className="font-semibold mt-2 lg:text-lg">{article.title}</h2>
                </Link>
                <div className="flex items-center mt-4">
                    <UserAvatar width="w-10" height="h-10" isDefault={true} profilePicturePath={profilePicturePath} />
                    <Link className="text-sm font-semibold block ml-2" to={`/user/${_id}`}>{username}</Link>
                </div>
            </div>
        </article>
    );
}