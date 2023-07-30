import { Link } from "react-router-dom";
import thumbnail from "assets/images/no_blog.svg";
import UserAvatar from "components/user/UserAvatar";

export default function MayLikeArticle({ id, title, userName }) {
    return (
        <article className="md:col-span-2 lg:col-span-1 h-fit">
            <Link to="/login">
                <img className="h-full w-full border" src={thumbnail} alt="thumbnail" />
            </Link>
            <div className="">
                <Link className="text-sm lg:text-xl font-semibold block my-4" to="/login">{title}</Link>
                <div className="flex items-center mt-2">
                    <UserAvatar width="w-6" height="h-6" isDefault={true} />
                    <Link className="text-sm font-semibold block ml-2" to="/login">{userName}</Link>
                </div>
            </div>
        </article>
    );
}