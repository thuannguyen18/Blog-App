import React, { useEffect } from "react";
import { useGlobalContext } from "context/context";

export default function SavedBlogs() {
    const { getSavedBlogs, savedBlogsLoading, savedBlogs } = useGlobalContext();

    useEffect(() => {
        getSavedBlogs();
    }, []);

    return (
        <div className="grid md:grid-cols-3 gap-8 lg:gap-4 mt-4">
            {savedBlogs.map(({ _id, title, subTitle, picturePath, likes }) => (
                savedBlogsLoading ? <CardPlaceholder key={_id} isProfilePicture={false} /> :
                    <UserArticle
                        key={_id}
                        id={_id}
                        title={title}
                        subtitle={subTitle}
                        picturePath={picturePath}
                        likes={likes}
                    />
            ))}
        </div>
    );
}