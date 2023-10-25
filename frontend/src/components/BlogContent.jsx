import React, { useEffect }from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "context/context";
import { Link } from "react-router-dom";
import ContentPlaceholder from "components/skeleton/ContentPlaceholder";
import UserInfo from "components/user/UserInfo";

export default function BlogContent() {
    const { id } = useParams();
    // Global State
    const {
        loading,
        getBlogDetail,
        blogId,
        blogTitle,
        blogSubtitle,
        blogContent,
        blogPicturePath,
        blogCategory,
        blogCreatedAt,
        authorId,
        authorName,
        authorEmail,
        authorProfilePicturePath,
    } = useGlobalContext();
;
    // Get blog detail
    useEffect(() => {
        getBlogDetail(id);
    }, []);

    // Change title
    useEffect(() => {
        document.title = blogTitle;
        return () => document.title = "MyBlog";
    })

    if (loading) {
        return <ContentPlaceholder />;
    }

    return (
        <React.Fragment>
            {/* AUTHOR INFORMATION */}
            <div className="mb-6">
                <Link to={`/category/${blogCategory}`} className="text-sm text-gray-500 hover:underline">{blogCategory}</Link>
                <h1 className="text-4xl lg:text-[42px] lg:leading-normal font-semibold my-2 text-gray-550">{blogTitle}</h1>
                <p className="text-gray-250 italic my-2">{blogSubtitle}</p>
                <div className="">
                    <UserInfo
                        id={authorId}
                        name={authorName}
                        email={authorEmail}
                        profilePath={authorProfilePicturePath}
                        createdAt={blogCreatedAt}
                    />
                </div>
            </div>
            {/* THUMBNAIL IMAGE */}
            <img className="rounded w-full" src={`http://localhost:3500/assets/${blogPicturePath}`} alt="thumbnail" />
            {/* BLOG CONTENT */}
            <div className="mt-6">
                {blogContent.split("\n").map((paragraph, index) => (
                    <p key={index} className="paragraph-per-line text-lg">
                        {paragraph}
                    </p>
                ))}
            </div>
        </React.Fragment>
    );
}