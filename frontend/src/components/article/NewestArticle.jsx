import { Link } from "react-router-dom";
import thumbnail from "assets/images/testing.jpg";
import UserAvatar from "components/user/UserAvatar";

export default function NewestArticle({ id, title, subTitle, category, userName, picturePath }) {
    return (
        <article className="col-span-1 flex justify-between">
            <Link to="/login">
                <div className="h-28 w-28 md:h-38 md:w-38 lg:h-44 lg:w-48">
                    {picturePath && <img className="object-cover h-full" src={`http://localhost:3500/assets/${picturePath}`} alt="thumbnail" />}
                </div>
            </Link>
            <div className="grow pl-4 flex flex-col justify-between">
                <Link className="text-sm text-sky-500 block mb-2 hover:text-sky-600" to="/login">{category}</Link>
                <div className="mb-3 grow">
                    <Link to="/login">
                        <h2 className="text-sm font-semibold lg:text-lg">{title}</h2>
                    </Link>
                    <p className="hidden lg:block text-sm mt-2">
                        {subTitle}
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
                    <Link className="text-sm font-semibold block ml-2" to="/login">{userName}</Link>
                </div>
            </div>
        </article>
    );
}