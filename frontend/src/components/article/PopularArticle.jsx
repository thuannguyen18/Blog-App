import { Link } from "react-router-dom";
import thumbnail from "assets/images/no_blog.svg";
import UserAvatar from "components/user/UserAvatar";

export default function PopularArticle({ id, title, content, category, userName }) {
    return (
        <article className="col-span-1 flex justify-between h-fit">
            <Link to="/login">
                <img className="h-full w-full border" src={thumbnail} alt="thumbnail" />
            </Link>
            <div className="lg:flex lg:flex-col lg:justify-between pl-4 grow">
                <Link className="text-sm text-sky-500 block mb-2" to="/login">{category || "Programming Language"}</Link>
                <Link className="text-sm lg:text-base font-semibold" to="/login">{title}</Link>
                <p className="hidden lg:block text-sm mt-2">
                    {content.substring(0, 50)}...
                    <Link
                        className="font-semibold"
                        to={`/blog/${id}`}
                    >
                        Read more
                    </Link>
                </p>
                <div className="flex items-center mt-2">
                    <UserAvatar width="w-6" height="h-6" isDefault={true} />
                    <Link className="text-sm font-semibold block ml-2" to="/login">{userName}</Link>
                </div>
            </div>
        </article>
    );
}