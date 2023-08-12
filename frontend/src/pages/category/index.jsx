import React, { useEffect } from "react";
import ImagePlaceholder from "components/skeleton/ImagePlaceholder";
import { useGlobalContext } from "context/context";
import Article from "components/article/UserArticle";

export default function Category() {
    const { getAllBlogs, loading, blogsPublic } = useGlobalContext();

    useEffect(() => {
        getAllBlogs();
    }, []);
    
    return (
        <React.Fragment>
            <div className="bg-gradient-to-r from-blue-400 to-emerald-400 h-[400px]">
                <h1 className="text-center text-4xl font-bold text-white flex items-center justify-center h-full">CATEGORY</h1>
            </div>
            <div className="container mx-auto">
                    
            </div>
        </React.Fragment>
    );
}

/*

{blogsPublic.map(({ _id, title, subTitle, category, userId, picturePath }) => (
                        loading ? <ImagePlaceholder /> : <Article
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

*/