import { useState, useEffect } from "react";
import { useGlobalContext } from "context/context";
import PopularArticle from "components/article/PopularArticle";
import MayLikeArticle from "components/article/MayLikeArticle";
import Banner from "components/Banner";

export default function Home() {
    const { getAllBlogs, blogsPublic } = useGlobalContext();
    const [allTopics, setAllTopics] = useState(true);
    const [bestTopics, setBestTopics] = useState(false);

    useEffect(() => {
        getAllBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Banner />
            <div className="container mx-auto mt-4 px-4 lg:px-0 lg:w-3/4">
                {/* POPULAR BLOG */}
                <h3 className="lg:text-xl font-semibold my-5">POPULAR ON MYBLOG</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {blogsPublic.map(({ _id, title, content, category, userId }) => (
                        <PopularArticle
                            key={_id}
                            id={_id}
                            title={title}
                            content={content}
                            category={category}
                            userName={userId}
                        />
                    ))}
                </div>

                {/* YOU MAY LIKE THESE BLOG */}
                <h3 className="lg:text-xl font-semibold mt-20 mb-5">YOU MAY LIKE THESE</h3>
                <div className="grid md:grid-cols-4 gap-8">
                    {blogsPublic.map(({ _id, title, userId }) => (
                        <MayLikeArticle
                            key={_id}
                            id={_id}
                            title={title}
                            userName={userId}
                        />
                    ))}
                </div>

                {/* FOR YOU & BEST TOPICS */}
                <div className="grid md:grid-cols-6 my-20">
                    <div className="order-last col-span-6 lg:col-span-4 lg:order-first">
                        <nav className="border-b border-slate-300">
                            <button
                                className={`${allTopics && "border-b-4 border-sky-600"}  text-lg font-semibold h-10 mr-4 w-32`}
                                onClick={() => {
                                    setAllTopics(true);
                                    setBestTopics(false);
                                }}
                            >
                                FOR YOU
                            </button>
                            <button
                                className={`${bestTopics && "border-b-4 border-sky-600"} text-lg font-semibold h-10 w-40`}
                                onClick={() => {
                                    setAllTopics(false);
                                    setBestTopics(true);
                                }}
                            >
                                BEST TOPICS
                            </button>
                        </nav>
                        <div className="pt-10">
                            {blogsPublic.map(({ _id, title, content, category, userId }) => (
                                <PopularArticle
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    content={content}
                                    category={category}
                                    userName={userId}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="bg-green-200 col-spa-6n lg:col-span-2">

                    </div>
                </div>
            </div>

        </>
    );
}