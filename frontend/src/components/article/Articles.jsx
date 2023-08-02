import { Link } from "react-router-dom";
import thumbnail from "assets/images/testing.jpg";
import UserAvatar from "components/user/UserAvatar";

export default function Article({ id, title, content, userName }) {
    return (
        <div className="grid lg:grid-cols-8 mb-12">
            <Link className="lg:col-span-2">
                <img className="object-cove h-full" src={thumbnail} alt="thumbnail" />
            </Link>
            <div className="lg:col-span-6 flex flex-col justify-between md:pl-4">
                <Link className="text-sm text-sky-500 block mb-2 hover:text-sky-600" to="/login">{"Programming Language"}</Link>
                <div className="grow">
                    <Link to="/login">
                        <h2 className="font-semibold mt-2 lg:text-lg">{title}</h2>
                    </Link>
                    <p className="hidden lg:block text-sm mt-2">
                        {content.substring(0, 100)}...
                        <Link
                            className="font-semibold"
                            to={`/blog/${id}`}
                        >
                            Read more
                        </Link>
                    </p>
                </div>
                <div className="flex items-center mt-4">
                    <UserAvatar width="w-6" height="h-6" isDefault={true} />
                    <Link className="text-sm font-semibold block ml-2" to="/login">{userName}</Link>
                </div>
            </div>
        </div>
    );
}