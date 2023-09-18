import { Link } from "react-router-dom";
import { CATEGORIES as categories } from "constants";
import UserAvatar from "components/user/UserAvatar";


export default function LatestArticle({ 
    id, 
    userId, 
    title, 
    subTitle, 
    category, 
    userName, 
    profilePicturePath,
    picturePath 
}) {
    return (
        <article className="md:col-span-1 grid grid-cols-12">
            <Link className="md:max-h-28 lg:max-h-36 col-span-4 rounded" to={`/blog/${id}`}>
                {picturePath && <img className="rounded object-cover w-full h-full md:h-28 lg:h-36 border border-gray-200 " src={`http://localhost:3500/assets/${picturePath}`} alt="thumbnail" />}
            </Link>
            <div className="col-span-8 pl-4 flex flex-col">
                <Link className="text-xs text-sky-500 block uppercase hover:text-sky-600" to={`/category/${category}`}>
                    {category}
                </Link>
                <div className="grow">
                    <Link to={`/blog/${id}`}>
                        <h2 className="text-sm font-semibold lg:text-base">{title}</h2>
                    </Link>
                    <p className="hidden lg:block text-xs mt-2">
                        {subTitle.substring(0, 60)}...
                    </p>
                </div>
                <div className="flex items-center mt-2">
                    <UserAvatar width="w-7" height="h-7" isDefault={true} profilePicturePath={profilePicturePath} />
                    <Link className="text-sm font-semibold block ml-2" to={`/user/${userId}`}>{userName}</Link>
                </div>
            </div>
        </article>
    );
}