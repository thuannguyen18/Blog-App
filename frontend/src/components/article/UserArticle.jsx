import { Link } from "react-router-dom";
import UserAvatar from "components/user/UserAvatar";

export default function UserArticle({ title, subtitle, picturePath }) {
    return (
        <article className="md:col-span-1">
            <Link to={``}>
                <img className="rounded object-cover w-full h-38 lg:h-58" src={`http://localhost:3500/assets/${picturePath}`} alt="thumbnail" />
            </Link>
            <div className="">
                <Link to={``}>
                    <h2 className="font-semibold mt-2 lg:text-lg">{title}</h2>
                </Link>
                <p className="paragraph-max-line text-sm mt-2">{subtitle}</p>
            </div>
            <div className="flex items-center justify-between mt-6">
                <span className="text-xs">28/07/2023</span>
                <span className="text-xs">Like 34</span>
            </div>
        </article>
    );
}