import React, { useEffect } from "react";
import { useGlobalContext } from "context/context";
import Container from "components/Container";
import ImagePlaceholder from "components/skeleton/ImagePlaceholder";
import NewestAriticle from "components/article/NewestArticle";

export default function Latest() {
    const { loading, newestBlogs, getBlogs } = useGlobalContext();

    useEffect(() => {
        getBlogs("GET_NEWEST_BLOGS", "newest");
    }, []);

    const content = newestBlogs.map(
        ({ _id, title, subTitle, category, userId, picturePath }) => (
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
        )
    );

    return (
        <Container styles={"my-4 pb-4"}>
            <h3 className="font-semibold my-5 text-sm md:text-base uppercase">Latest on MyBlog</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
                {content}
            </div>
        </Container>
    );
}