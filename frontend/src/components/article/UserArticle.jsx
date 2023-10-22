import { Link } from "react-router-dom";
import formatDate from "utils/formatDate";

export default function UserArticle({ id, title, subtitle, picturePath, createdAt }) {
    return (
        <article className="md:col-span-1">
            <Link className="max-h-48" to={`/blog/${id}`}>
                <img className="border border-gray-200 rounded object-cover w-full h-48" src={`http://localhost:3500/assets/${picturePath}`} alt="thumbnail" />
            </Link>
            <div className="">
                <Link to={`/blog/${id}`}>
                    <h2 className="font-semibold mt-2 lg:text-base">{title}</h2>
                </Link>
                <p className="paragraph-max-line text-sm mt-2">{subtitle}</p>
            </div>
            <div className="flex items-center justify-between mt-10">
                <span className="text-xs text-gray-750">{formatDate(createdAt)}</span>
            </div>
        </article>
    );
}