import React, { useEffect } from "react";
import { useGlobalContext } from "context/context";
import Container from "components/Container";
import CardPlaceholder from "components/skeleton/CardPlaceholder";
import RecommendArticle from "components/article/RecommendArticle";

export default function RecommendBlogs() {
    const { loading, randomBlogs, getBlogs } = useGlobalContext();

    useEffect(() => {
        getBlogs("GET_RANDOM_BLOGS", "random");
    }, []);

    return (
        <div style={{ backgroundColor: "#f5f7fa", padding: "1px 0 20px 0" }}>
            <Container>
                <h3 className="font-semibold my-5 text-sm md:text-base uppercase">Recommended for You</h3>
                <div className="grid md:grid-cols-4 gap-8 lg:gap-4">
                    {randomBlogs.map(article => (
                        loading
                            ? <CardPlaceholder key={article._id} />
                            : <RecommendArticle key={article._id} article={article} />
                    ))}
                </div>
            </Container>
        </div>
    );
}