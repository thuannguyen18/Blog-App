import React, { useEffect } from "react";
import { useGlobalContext } from "context/context";
import Container from "components/Container";
import ImagePlaceholder from "components/skeleton/ImagePlaceholder";
import LatestArticle from "components/article/LatestArticle";

export default function LatestBlog() {
    const { loading, getBlogs, latestBlogs } = useGlobalContext();

    useEffect(() => {
        getBlogs("GET_NEWEST_BLOGS", "newest");
    }, []);

    return (
        <Container styles={"my-4 pb-4"}>
            <h3 className="font-semibold my-5 text-sm md:text-base uppercase">Latest on MyBlog</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
                {latestBlogs.map(article => (
                    loading 
                    ? <ImagePlaceholder key={article._id} /> 
                    : <LatestArticle key={article._id} article={article}/>
                ))}
            </div>
        </Container>
    );
}