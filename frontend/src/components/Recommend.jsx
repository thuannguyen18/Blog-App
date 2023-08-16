import React, { useEffect } from "react";
import { useGlobalContext } from "context/context";
import Container from "components/Container";
import CardPlaceholder from "components/skeleton/CardPlaceholder";
import RecommendArticle from "components/article/RecommendArticle";

export default function Recommend() {
    const { loading, randomBlogs, getBlogs } = useGlobalContext();

    useEffect(() => {
        getBlogs("GET_RANDOM_BLOGS", "random");
    }, []);

    const content = randomBlogs.map(
        ({ _id, title, user, picturePath }) => (
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
        )
    );

    return (
        <div style={{ backgroundColor: "#f5f7fa", padding: "1px 0 20px 0" }}>
            <Container styles={""}>
                <h3 className="font-semibold my-5 text-lg md:text-xl lg:text-2xl">Recommended for You</h3>
                <div className="grid md:grid-cols-4 gap-8 lg:gap-4">
                    {content}
                </div>
            </Container>
        </div>
    );
}