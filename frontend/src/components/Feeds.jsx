import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "context/context";
import Article from "components/article/Articles";
import Category from "components/Category";
import Container from "components/Container";
import ImagePlaceholder from "components/skeleton/ImagePlaceholder";
import Pagination from "components/Pagination";
import { token } from "constants";

export default function Feeds() {
    // Global State
    const {
        feedLoading,
        getAllBlogs,
        allBlogs,
        getTopBlogs,
        topBlogs,
        getAuthorBlogs,
        followingBlogs,
        currentPage,
        isAllTopics,
        isBestTopics,
        isAuthorTopics,
        setAuthorTopics,
        setAllTopics,
        setBestTopics,
        savesAndLikes
    } = useGlobalContext();

    // Scroll when user change page
    const ref = useRef();
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }

    // Render all blogs
    const allBlogsContent = allBlogs.map((topic, index) => (
        feedLoading ?
            <ImagePlaceholder key={topic._id} /> :
            <Article
                key={topic._id}
                topic={topic}
                isSaved={savesAndLikes[index].isSaved}
                isLiked={savesAndLikes[index].isLiked}
            />
    ));

    // Render best blogs
    const allTopBlogsContent = topBlogs.map((topic) => (
        feedLoading ?
            <ImagePlaceholder key={topic._id} /> :
            <Article
                key={topic._id}
                topic={topic}
            />
    ));

    // Render following author blogs
    const followingAuthorContent = followingBlogs.map((topic) => (
        feedLoading ?
            <ImagePlaceholder key={topic._id} /> :
            <Article
                key={topic._id}
                topic={topic}
            />
    ));

    // Get all blogs
    useEffect(() => {
        if (isBestTopics) {
            getTopBlogs();
        }

        if (isAuthorTopics) {
            getAuthorBlogs()
        }

        getAllBlogs();
    }, [currentPage, isAllTopics, isBestTopics, isAuthorTopics]);

    return (
        <Container styles={"my-4 py-4"}>
            <div ref={ref} className="grid md:grid-cols-6">
                <div className="order-last col-span-6 lg:col-span-4 lg:order-first lg:pr-10 mt-6 lg:mt-0">
                    <nav className="border-b border-slate-200">
                        <button
                            className={`${isAllTopics && "border-b-4 border-sky-500"} text-sm font-medium h-10 px-6 mr-2`}
                            onClick={() => setAllTopics()}>
                            FOR YOU
                        </button>
                        <button
                            className={`${isBestTopics && "border-b-4 border-sky-500"} text-sm font-medium h-10 px-6 mr-2`}
                            onClick={() => setBestTopics()}
                        >
                            BEST TOPICS
                        </button>
                        {token && <button
                            className={`${isAuthorTopics && "border-b-4 border-sky-500"} text-sm font-medium h-10 px-6 mr-2`}
                            onClick={() => setAuthorTopics()}
                        >
                            AUTHOR'S TOPICS
                        </button>}
                    </nav>
                    <div className="pt-8">
                        {isAllTopics && allBlogsContent}
                        {isBestTopics && allTopBlogsContent}
                        {isAuthorTopics && followingAuthorContent}
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