import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "components/Container";
import CardPlaceholder from "components/skeleton/CardPlaceholder";
import UserArticle from "components/article/UserArticle";
import ProfileCardPlaceholder from "components/skeleton/ProfileCardPlaceholder";
import ProfileCard from "components/ProfileCard";
import { token } from "constants";
import { useGlobalContext } from "context/context";

export default function Author() {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        loading,
        getAuthor,
        authorName,
        authorEmail,
        authorProfilePicturePath,
        authorBlogs,
        authorFollowers,
        authorFollowing,
        isFollowing,
        follow,
        unfollow
    } = useGlobalContext();

    const handleFollow = () => {
        if (!token) {
            navigate("/login");
            return;
        }

        if (1 + 2) {
            unfollow(id);
            return;
        }

        follow(id);
    }

    useEffect(() => {
        getAuthor(id);
    }, []);


    return (
        <div className="h-screen">
            <Container styles={"lg:grid lg:grid-cols-4 lg:gap-4 md:mt-8"}>
                {loading ? <ProfileCardPlaceholder /> :
                    <ProfileCard 
                        name={authorName}
                        email={authorEmail}
                        profilePicturePath={authorProfilePicturePath}
                        followers={authorFollowers}
                        following={authorFollowing}
                        blogs={authorBlogs}
                        handleFollow={handleFollow}
                    />
                }
                <div className="p-4 md:border md:border-gray-200 md:shadow-lg md:mt-6 md:rounded lg:mt-0 lg:col-span-3">
                    <nav className="border-b border-slate-200">
                        <button
                            className={`font-semibold h-10 w-32`}
                        >
                            BLOGS ({authorBlogs.length})
                        </button>
                    </nav>
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-4 mt-4">
                        {authorBlogs.map(({ _id, title, subTitle, picturePath, likes }) => (
                            loading ? <CardPlaceholder key={_id} isProfilePicture={false} /> :
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
                </div>
            </Container>
        </div>
    );
}