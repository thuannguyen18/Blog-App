import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "context/context";
import UserInfo from "components/user/UserInfo";
import FormComment from "components/comment/CommentForm";
import ContentPlaceholder from "components/skeleton/ContentPlaceholder";

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
        <div className="mt-20">
            <div className="container mx-auto px-4 md:w-4/6 lg:w-3/6">
                {loading ? <ContentPlaceholder /> :
                    <React.Fragment>
                        {/* USER AND BLOG INFO */}
                        <div className="mb-4">
                            <Link to={`/category/${blogCategory}`} className="text-sm text-gray-500 hover:underline">{blogCategory}</Link>
                            <h1 className="text-4xl lg:text-5xl lg:leading-normal font-semibold my-2 text-gray-550">{blogTitle}</h1>
                            <p className="text-gray-250 italic">{blogSubtitle}</p>
                            <UserInfo
                                id={authorId}
                                name={authorName}
                                email={authorEmail}
                                profilePath={authorProfilePicturePath}
                            />
                        </div>
                        {/* PICTURE */}
                        <img className="rounded w-full" src={`http://localhost:3500/assets/${blogPicturePath}`} alt="image" />
                        {/* CONTENTS */}
                        <div className="mt-4">
                            {/* <h3 className="heading-per-line semibold text-2xl font-bold">1- Một quyển sách khó:</h3>*/}
                            {blogContent.split("\n").map((paragraph, index) => (
                                <p key={index} className="paragraph-per-line text-lg">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        {/* COMMENTS */}
                        <FormComment />
                    </React.Fragment>
                }
            </div>
        </div>
    )
}