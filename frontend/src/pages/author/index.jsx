import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "components/Container";
import CardPlaceholder from "components/skeleton/CardPlaceholder";
import UserArticle from "components/article/UserArticle";
import ProfileCardPlaceholder from "components/skeleton/ProfileCardPlaceholder";
import ProfileCard from "components/ProfileCard";
import { token } from "constants";
import { useGlobalContext } from "context/context"

export default function Author() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Global State
    const {
        loading,
        getAuthor,
        authorName,
        authorEmail,
        authorProfilePicturePath,
        authorBlogs,
        authorFollowers,
        authorFollowing,
        follow,
        isFollowing,
    } = useGlobalContext();

    // Statistical data
    const profileInfoStats = [
        {
            id: 1,
            stats: authorFollowers.length,
            info: "Followers"
        },
        {
            id: 2,
            stats: authorFollowing.length,
            info: "Following"
        },
        {
            id: 3,
            stats: authorBlogs.length,
            info: "Posts"
        },
    ];

    // Follow & Unfollow author
    const handleFollow = () => {
        if (token) {
            follow(id);
        } else {
            navigate("/login");
        }
    }

    // Get author's information
    useEffect(() => {
        getAuthor(id);
    }, []);

    // Change title
    useEffect(() => {
        document.title = `${authorName}'s posts`
        return () => document.title = "MyBlog";
    });

    return (
        <div className="">
            <Container styles={"lg:grid lg:grid-cols-4 lg:gap-4 md:mt-8"}>
                {
                    loading ? <ProfileCardPlaceholder /> :
                        <ProfileCard
                            name={authorName}
                            email={authorEmail}
                            profilePicturePath={authorProfilePicturePath}
                            isFollowing={isFollowing}
                            handleFollow={handleFollow}
                            profileInfoStats={profileInfoStats}
                        />
                }
                <div className="p-4 md:border md:border-gray-200 md:shadow-lg md:mt-6 md:rounded lg:mt-0 lg:col-span-3">
                    <nav className="border-b border-slate-200">
                        <button className="font-semibold h-10 w-32">
                            BLOGS ({authorBlogs.length})
                        </button>
                    </nav>
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-4 mt-4">
                        {authorBlogs.map(({ _id, title, subTitle, picturePath, likes, createdAt }) => (
                            loading ?
                                <CardPlaceholder
                                    key={_id}
                                    isProfilePicture={false}
                                /> :
                                <UserArticle
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    subtitle={subTitle}
                                    picturePath={picturePath}
                                    likeCount={likes.length}
                                    createdAt={createdAt}
                                />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}