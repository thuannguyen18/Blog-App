import React, { useState, useEffect } from "react";
import { useGlobalContext } from "context/context";

import { CATEGORIES as categories } from "constants";
import Article from "components/article/Articles";
import Container from "components/Container";
import ImagePlaceholder from "components/skeleton/ImagePlaceholder";
import Pagination from "components/Pagination";


export default function Feed() {
    const { loading, getAllBlogs, currentPage, blogsPublic } = useGlobalContext();

    const [allTopics, setAllTopics] = useState(true);
    const [bestTopics, setBestTopics] = useState(false);

    useEffect(() => {
        getAllBlogs();
    }, [currentPage]);


    return (
        <Container styles={"my-4 py-4"}>
            <div className="grid md:grid-cols-6">
                <div className="order-last col-span-6 lg:col-span-4 lg:order-first lg:pr-10">
                    <nav className="border-b border-slate-200">
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
                <div className="col-span-6 lg:col-span-2">
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
    );
}