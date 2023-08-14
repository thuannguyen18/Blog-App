import React, { useState, useEffect } from "react";
import { useGlobalContext } from "context/context";

import { CATEGORIES as categories } from "constants";
import Article from "components/article/Articles";
import Banner from "components/Banner";
import Container from "components/Container";
import CardPlaceholder from "components/skeleton/CardPlaceholder";
import ImagePlaceholder from "components/skeleton/ImagePlaceholder";
import NewestAriticle from "components/article/NewestArticle";
import RecommendArticle from "components/article/RecommendArticle";
import Pagination from "components/Pagination";

export default function Home() {
    const {
        getAllBlogs,
        getBlogs,
        blogsPublic,
        newestBlogs,
        randomBlogs,
        loading
    } = useGlobalContext();

    const [allTopics, setAllTopics] = useState(true);
    const [bestTopics, setBestTopics] = useState(false);

    useEffect(() => {
        getAllBlogs();
        getBlogs("GET_NEWEST_BLOGS", "newest");
        getBlogs("GET_RANDOM_BLOGS", "random");
    }, []);

    return (
        <React.Fragment>
            <Banner />
            {/* LATEST BLOG */}
            <Container styles={"my-4 pb-4"}>
                <h3 className="font-semibold my-5 text-lg md:text-xl lg:text-2xl">Latest on MyBlog</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
                    {newestBlogs.map(({ _id, title, subTitle, category, userId, picturePath }) => (
                        loading ? <ImagePlaceholder key={_id} /> :
                            <NewestAriticle
                                key={_id}
                                id={_id}
                                userId={userId._id}
                                userName={userId.username}
                                profilePicturePath={userId.profilePicturePath}
                                title={title}
                                subTitle={subTitle}
                                category={category}
                                picturePath={picturePath}
                            />
                    ))}
                </div>
            </Container>
            {/* RECOMMEDED FOR YOU */}
            <div style={{ backgroundColor: "#f5f7fa", padding: "1px 0 20px 0" }}>
                <Container styles={""}>
                    <h3 className="font-semibold my-5 text-lg md:text-xl lg:text-2xl">Recommended for You</h3>
                    <div className="grid md:grid-cols-4 gap-8 lg:gap-4">
                        {randomBlogs.map(({ _id, title, user, picturePath }) => (
                            loading ? <CardPlaceholder key={_id} /> :
                                <RecommendArticle
                                    key={_id}
                                    id={_id}
                                    userId={user._id}
                                    title={title}
                                    userName={user.username}
                                    profilePicturePath={user.profilePicturePath}
                                    picturePath={picturePath}
                                />
                        ))}
                    </div>
                </Container>
            </div>
            {/* FOR YOU & BEST TOPICS */}
            <Container styles={"my-4 py-4"}>
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
                                loading ? <ImagePlaceholder key={_id} /> : <Article
                                    key={_id}
                                    id={_id}
                                    userId={userId._id}
                                    userName={userId.username}
                                    profilePicturePath={userId.profilePicturePath}
                                    title={title}
                                    subTitle={subTitle}
                                    category={category}
                                    picturePath={picturePath}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-6 lg:col-span-2 sticky top-0 right-0">
                        <h2 className="font-semibold pt-5 text-lg lg:text-xl">Categories</h2>
                        <div className="flex flex-wrap mt-4">
                            {categories.map((category, index) => (
                                <button key={index} className="border border-slate-300 rounded-full py-2 px-4 mr-2 mb-3 lg:h-10">{category}</button>
                            ))}
                        </div>
                    </div>
                </div>
                <Pagination />
            </Container>
        </React.Fragment>
    );
}