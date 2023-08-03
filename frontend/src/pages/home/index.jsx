import React, { useState, useEffect } from "react";

import { useGlobalContext } from "context/context";
import Article from "components/article/Articles";
import NewestAriticle from "components/article/NewestArticle";
import RecommendArticle from "components/article/RecommendArticle";
import Banner from "components/Banner";

const categories = ["Science - Technology", "History", "Music", "Technology", "Sport", "Fashion"];

export default function Home() {
    const {
        getAllBlogs,
        getBlogs,
        blogsPublic,
        newestBlogs,
        randomBlogs,
    } = useGlobalContext();

    const [allTopics, setAllTopics] = useState(true);
    const [bestTopics, setBestTopics] = useState(false);

    useEffect(() => {
        getAllBlogs();
        getBlogs("GET_NEWEST_BLOGS", "newest");
        getBlogs("GET_RANDOM_BLOGS", "random");
    }, []);

    console.log(newestBlogs)

    return (
        <React.Fragment>
            <Banner />
            {/* LATEST BLOG */}
            <div className="container mx-auto my-4 p-4">
                <h3 className="font-semibold my-5 text-lg md:text-xl lg:text-2xl">Latest on MyBlog</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {newestBlogs.map(({ _id, title, subTitle, category, userId, picturePath }) => (
                        <NewestAriticle
                            key={_id}
                            id={_id}
                            title={title}
                            subTitle={subTitle}
                            category={category}
                            userName={userId.username}
                            picturePath={picturePath}
                        />
                    ))}
                </div>
            </div>
            {/* RECOMMEDED FOR YOU */}
            <div style={{ backgroundColor: "#f5f7fa" }}>
                <div className="container mx-auto my-4 p-4">
                    <h3 className="font-semibold my-5 text-lg md:text-xl lg:text-2xl">Recommended for You</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                        {randomBlogs.map(({ _id, title, user, picturePath }) => (
                            <RecommendArticle
                                key={_id}
                                id={_id}
                                title={title}
                                userName={user.username}
                                picturePath={picturePath}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* FOR YOU & BEST TOPICS */}
            <div className="container mx-auto my-4 p-4">
                <div className="grid md:grid-cols-6">
                    <div className="order-last col-span-6 lg:col-span-4 lg:order-first lg:pr-10">
                        <nav className="border-b border-slate-300">
                            <button
                                className={`${allTopics && "border-b-4 border-sky-600"} font-semibold h-10 w-32`}
                                onClick={() => {
                                    setAllTopics(true);
                                    setBestTopics(false);
                                }}
                            >
                                FOR YOU
                            </button>
                            <button
                                className={`${bestTopics && "border-b-4 border-sky-600"} font-semibold h-10 w-40`}
                                onClick={() => {
                                    setAllTopics(false);
                                    setBestTopics(true);
                                }}
                            >
                                BEST TOPICS
                            </button>
                        </nav>
                        <div className="pt-8">
                            {blogsPublic.map(({ _id, title, subTitle, category, userId, picturePath }) => (
                                <Article
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    subTitle={subTitle}
                                    category={category}
                                    userName={userId.username}
                                    picturePath={picturePath}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-6 lg:col-span-2">
                        <h2 className="font-semibold pt-5 text-lg lg:text-xl">Categories</h2>
                        <div className="flex flex-wrap mt-4">
                            {categories.map((category, index) => (
                                <button key={index} className="border border-slate-300 rounded-full py-2 px-4 mr-2 mb-3 lg:h-10">{category}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}