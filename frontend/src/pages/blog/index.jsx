import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "context/context";
import BlogContent from "components/BlogContent";
import ContentPlaceholder from "components/skeleton/ContentPlaceholder";
import FormComment from "components/comment/CommentForm";

export default function Blog() {
    const { id } = useParams();
    const {
        loading,
        getBlogDetail,
        blogTitle,
        blogSubtitle,
        blogContent,
        blogPicturePath,
        blogCategory,
        authorId,
        authorName,
        authorEmail,
        authorProfilePicturePath,
    } = useGlobalContext();

    useEffect(() => {
        getBlogDetail(id);
    }, []);

    return (
        <div className="my-20">
            <div className="container mx-auto px-4 md:w-4/6 lg:w-3/6">
                {loading ? <ContentPlaceholder /> :
                    <BlogContent 
                        blogTitle={blogTitle}
                        blogSubtitle={blogSubtitle}
                        blogCategory={blogCategory}
                        blogContent={blogContent}
                        blogPicturePath={blogPicturePath}
                        authorId={authorId}
                        authorName={authorName}
                        authorEmail={authorEmail}
                        authorProfilePicturePath={authorProfilePicturePath}
                    />
                }
                <FormComment />
            </div>
        </div>
    )
}