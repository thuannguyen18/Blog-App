import { Link } from "react-router-dom";
import bannerImage from "assets/images/banner.avif";
import UserAvatar from "./user/UserAvatar";

export default function Article({ id, title, content, userName }) {
    return (
        <article className="shadow-xl flex justify-center border border-slate-300" style={{ width: "600px" }}>
            <img className="border border-slate-300 shadow-xl" src={bannerImage} alt="image" style={{ width: "25vh" }} />
            <div className="p-4">
                <Link className="text-lg block mb-2 text-sky-500" to="/login">Programming Language</Link>
                <h2 className="text-xl">{title}</h2>
                <p className="text-sm mt-2">
                    {content.substring(0, 100)}...
                    <Link
                        className="font-semibold"
                        to={`/blog/${id}`}
                    >
                        Read more
                    </Link>
                </p>
                <div className="flex items-center mt-2">
                    <UserAvatar width="w-8" height="h-8" isDefault={true} />
                    <Link className="text-lg block ml-2" to="/login">{userName}</Link>
                </div>
            </div>
        </article>
    );
}