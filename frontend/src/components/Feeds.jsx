import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "context/context";
import Article from "components/article/Articles";
import Category from "components/Category";
import Container from "components/Container";
import ImagePlaceholder from "components/skeleton/ImagePlaceholder";
import Pagination from "components/Pagination";

export default function Feeds() {
    const {
        feedLoading,
        getAllBlogs,
        allBlogs,
        getTopBlogs,
        topBlogs,
        currentPage,
        isAllTopics,
        isBestTopics,
        setAllTopics,
        setBestTopics,
        saves,
        likeBlog
    } = useGlobalContext();
    const ref = useRef();

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        getAllBlogs();
    }, [currentPage, isAllTopics]);

    useEffect(() => {
        getTopBlogs();
    }, [currentPage, isBestTopics]);

    return (
        <Container styles={"my-4 py-4"}>
            <div ref={ref} className="grid md:grid-cols-6">
                <div className="order-last col-span-6 lg:col-span-4 lg:order-first lg:pr-10 mt-6 lg:mt-0">
                    <nav className="border-b border-slate-200">
                        <button
                            className={`${isAllTopics && "border-b-4 border-sky-500"} text-sm font-medium h-10 w-32`}
                            onClick={() => setAllTopics()}>
                            FOR YOU
                        </button>
                        <button
                            className={`${isBestTopics && "border-b-4 border-sky-500"} text-sm font-medium h-10 w-40`}
                            onClick={() => setBestTopics()}
                        >
                            BEST TOPICS
                        </button>
                    </nav>
                    <div className="pt-8">
                        {isAllTopics ? allBlogs.map((topic, index) => (
                            feedLoading ? <ImagePlaceholder key={topic._id} /> : <Article key={topic._id} topic={topic} isSaved={saves[index]} />
                        )) : topBlogs.map((topic) => (
                            feedLoading ? <ImagePlaceholder key={topic._id} /> : <Article key={topic._id} topic={topic} />
                        ))}
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