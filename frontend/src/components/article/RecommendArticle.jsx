import { Link } from "react-router-dom";
import UserAvatar from "components/user/UserAvatar";

export default function RecommendArticle({ id, userId, title, userName, profilePicturePath, picturePath }) {
    return (
        <article className="md:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <Link to={`/blog/${id}`}>
                {picturePath && <img className="rounded object-cover w-full h-38 lg:h-58" src={`http://localhost:3500/assets/${picturePath}`} alt="thumbnail" />}
            </Link>
            <div className="grow flex flex-col justify-between">
                <Link to={`/blog/${id}`}>
                    <h2 className="font-semibold mt-2 lg:text-lg">{title}</h2>
                </Link>
                <div className="flex items-center mt-4">
                    <UserAvatar width="w-10" height="h-10" isDefault={true} profilePicturePath={profilePicturePath} />
                    <Link className="text-sm font-semibold block ml-2" to={`/user/${userId}`}>{userName}</Link>
                </div>
            </div>
        </article>
    );
}