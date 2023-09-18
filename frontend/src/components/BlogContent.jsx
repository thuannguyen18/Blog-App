import React from "react";
import { Link } from "react-router-dom";
import UserInfo from "components/user/UserInfo";

export default function BlogContent({
    blogTitle,
    blogSubtitle,
    blogCategory,
    blogContent,
    blogPicturePath,
    authorId,
    authorName,
    authorEmail,
    authorProfilePicturePath
}) {
    return (
        <React.Fragment>
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
            <img className="rounded w-full" src={`http://localhost:3500/assets/${blogPicturePath}`} alt="image" />
            <div className="mt-4">
                {blogContent.split("\n").map((paragraph, index) => (
                    <p key={index} className="paragraph-per-line text-lg">
                        {paragraph}
                    </p>
                ))}
            </div>
        </React.Fragment>
    );
}