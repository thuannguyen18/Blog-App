import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "context/context";

import Article from "components/article/Articles";
import Category from "components/Category";
import Container from "components/Container";
import ImagePlaceholder from "components/skeleton/ImagePlaceholder";
import Pagination from "components/Pagination";


export default function Feed() {
    const {
        feedLoading,
        getAllBlogs,
        blogsPublic,
        getTopBlogs,
        topBlogs,
        currentPage,
        allTopics,
        bestTopics,
        setAllTopics,
        setBestTopics,
    } = useGlobalContext();
    const ref = useRef();

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        getAllBlogs();
    }, [currentPage, allTopics]);

    useEffect(() => {
        getTopBlogs();
    }, [currentPage, bestTopics]);


    const content = allTopics ? blogsPublic.map(({ _id, title, subTitle, category, userId, picturePath, likes }) => (
        feedLoading ? <ImagePlaceholder key={_id} /> : <Article
            key={_id}
            id={_id}
            userId={userId._id}
            userName={userId.username}
            profilePicturePath={userId.profilePicturePath}
            title={title}
            subTitle={subTitle}
            category={category}
            picturePath={picturePath}
            likes={likes}
        />
    )) : topBlogs.map(({ _id, title, subTitle, category, userId, picturePath, likes }) => (
        feedLoading ? <ImagePlaceholder key={_id} /> : <Article
            key={_id}
            id={_id}
            userId={userId._id}
            userName={userId.username}
            profilePicturePath={userId.profilePicturePath}
            title={title}
            subTitle={subTitle}
            category={category}
            picturePath={picturePath}
            likes={likes}
        />
    ));

    return (
        <Container styles={"my-4 py-4"}>
            <div ref={ref} className="grid md:grid-cols-6">
                <div className="order-last col-span-6 lg:col-span-4 lg:order-first lg:pr-10 mt-6 lg:mt-0">
                    <nav className="border-b border-slate-200">
                        <button
                            className={`${allTopics && "border-b-4 border-sky-500"} text-sm font-semibold h-10 w-32 lg:text-base`}
                            onClick={() => setAllTopics()}>
                            FOR YOU
                        </button>
                        <button
                            className={`${bestTopics && "border-b-4 border-sky-500"} text-sm font-semibold h-10 w-40 lg:text-base`}
                            onClick={() => setBestTopics()}
                        >
                            BEST TOPICS
                        </button>
                    </nav>
                    <div className="pt-8">
                        {content}
                    </div>
                </div>
                <div className="col-span-6 lg:col-span-2">
                    <Category />
                </div>
            </div>
            <Pagination handleClick={handleClick} />
        </Container>
    );
}