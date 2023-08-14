import { Link } from "react-router-dom";
import UserAvatar from "components/user/UserAvatar";

export default function NewestArticle({ id, userId, title, subTitle, category, userName, profilePicturePath, picturePath }) {
    return (
        <article className="md:col-span-1 grid lg:grid-cols-6">
            <Link className="lg:col-span-2" to={`/blog/${id}`}>
                {picturePath && <img className="rounded object-cover h-full" src={`http://localhost:3500/assets/${picturePath}`} alt="thumbnail" />}
            </Link>
            <div className="lg:col-span-4 lg:pl-4 flex flex-col">
                <Link className="text-sm text-sky-500 block hover:text-sky-600" to="/category">{category}</Link>
                <div className="grow">
                    <Link to={`/blog/${id}`}>
                        <h2 className="text-sm font-semibold lg:text-base">{title}</h2>
                    </Link>
                    <p className="paragraph-max-line hidden lg:block text-sm mt-2">
                        {subTitle}
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