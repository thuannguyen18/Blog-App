import { Link } from "react-router-dom";
import UserAvatar from "components/user/UserAvatar";

export default function SearchArticle({ result }) {
    return (
        <div className="flex py-8">
            <Link className="h-[148px] md:w-[228px] rounded" to={`/blog/${result._id}`}>
                {result.picturePath && <img className="rounded object-cover w-full h-full border border-gray-200 " src={`http://localhost:3500/assets/${result.picturePath}`} alt="thumbnail" />}
            </Link>
            <div className="flex-1 pl-4">
                <div className="flex items-center justify-between mt-1 mb-2 lg:mt-0">
                    <Link className="text-xs text-sky-500 hover:text-sky-600 uppercase" to={`/category/${result.category}`}>{result.category}</Link>
                </div>
                <Link className="block" to={`/blog/${result._id}`}>
                    <h2 className="font-semibold mt-1 lg:text-lg">{result.title}</h2>
                </Link>
                <p className="paragraph-max-line font-normal my-2">
                    {result.subTitle}
                </p>
                <div className="flex items-center">
                    <UserAvatar height="h-[48px]" width="w-[48px]" profilePicturePath={result.userId.profilePicturePath} />
                    <Link to={`/user/${result.userId._id}`} className="ml-2">{result.userId.username}</Link>
                </div>
            </div>
        </div>
    );
}