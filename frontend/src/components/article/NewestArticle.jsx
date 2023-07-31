import { Link } from "react-router-dom";
import thumbnail from "assets/images/testing.jpg";
import UserAvatar from "components/user/UserAvatar";

export default function NewestArticle({ id, title, content, category, userName }) {
    return (
        <article className="col-span-1 flex justify-between">
            <Link to="/login">
                <div className="h-28 w-28 md:h-38 md:w-38 lg:h-44 lg:w-48">
                    <img className="object-cover h-full" src={thumbnail} alt="thumbnail" />
                </div>
            </Link>
            <div className="grow pl-4 flex flex-col justify-between">
                <Link className="text-sm text-sky-500 block mb-2 hover:text-sky-600" to="/login">{category || "Programming Language"}</Link>
                <div className="mb-3 grow">
                    <Link to="/login">
                        <h2 className="text-sm font-semibold lg:text-lg">{title}</h2>
                    </Link>
                    <p className="hidden lg:block text-sm mt-2">
                        {content.substring(0, 100)}
                        {/* <Link
                            className="font-semibold"
                            to={`/blog/${id}`}
                        >
                            Read more
                        </Link> */}
                    </p>
                </div>
                <div className="flex items-center mt-2">
                    <UserAvatar width="w-6" height="h-6" isDefault={true} />
                    <Link className="text-sm font-semibold block ml-2" to="/login">ADMIN</Link>
                </div>
            </div>
        </article>
    );
}