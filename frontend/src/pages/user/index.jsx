import UserAvatar from "components/user/UserAvatar";
import UserArticle from "components/article/UserArticle";
import CardPlaceholder from "components/skeleton/CardPlaceholder";
import { useGlobalContext } from "context/context";
import { useEffect } from "react";

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function User() {
    const { getBlogs, loading, randomBlogs } = useGlobalContext();

    useEffect(() => {
        getBlogs("GET_RANDOM_BLOGS", "random");
    }, []);

    return (
        <div className="container mx-auto lg:grid lg:grid-cols-4 lg:gap-4 md:mt-4">
            <div className="lg:col-span-1 md:border md:border-gray-200 p-4 md:rounded md:shadow-lg max-h-[355px]">
                <div className="mx-auto">
                    <UserAvatar width="w-28 lg:w-36" height="h-28 lg:h-36" center profilePicturePath={"p9.jpeg"} />
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-bold mt-2">Chloe Chau</h3>
                    <p className="text-sm">@chloechau94</p>
                </div>
                <div className="grid grid-cols-3 mt-4 gap-8 text-center">
                    <div className="col-span-1">
                        <span className="block font-bold">18</span>
                        <span className="text-sm">Followers</span>
                    </div>
                    <div className="col-span-1">
                        <span className="block font-bold">11</span>
                        <span className="text-sm">Following</span>
                    </div>
                    <div className="col-span-1">
                        <span className="block font-bold">9</span>
                        <span className="text-sm">Blogs</span>
                    </div>
                </div>
                <button className="mt-4 p-1 w-full bg-sky-100 h-10 text-sky-500">Follow</button>
            </div>
            <div className="p-4  md:border md:border-gray-200 md:shadow-lg md:mt-6 md:rounded lg:mt-0 lg:col-span-3">
                <nav className="border-b border-slate-200">
                    <button
                        className={`font-semibold h-10 w-32`}
                    >
                        BLOGS
                    </button>
                </nav>
                <div className="grid grid-rows-5 md:grid-cols-3 gap-8 lg:gap-4 mt-4">
                    {test.map((el) => (
                        loading ? <CardPlaceholder /> : <UserArticle />
                    ))}
                </div>
            </div>
        </div>
    );
}