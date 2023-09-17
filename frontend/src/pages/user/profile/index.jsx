import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsBookmark, BsVectorPen } from "react-icons/bs";
import { useGlobalContext } from "context/context";
import { userInformation } from "constants";
import Article from "components/article/Articles";
import Container from "components/Container";
import CardPlaceholder from "components/skeleton/CardPlaceholder";
import UserInfoPlaceholder from "components/skeleton/UserInfoPlaceholder";
import UserArticle from "components/article/UserArticle";
import UserAvatar from "components/user/UserAvatar";

export default function Profile() {
    const [isBlogs, setIsBlogs] = useState(true);
    const [isSaved, setIsSaved] = useState(false);

    const {
        loading,
        userName,
        userEmail,
        getAllUserBlog,
        userBlogsLoading,
        userBlogs,
        getSavedBlogs,
        savedBlogsLoading,
        savedBlogs
    } = useGlobalContext();

    useEffect(() => {
        getAllUserBlog(userInformation?.id);
    }, [isBlogs]);

    useEffect(() => {
        if (isSaved) {
            getSavedBlogs();
        }
    }, [isSaved]);

    console.log(userName);
    console.log(userEmail)

    return (
        <Container styles={"lg:grid lg:grid-cols-4 lg:gap-4 md:mt-8"}>
            {loading ? <UserInfoPlaceholder /> :
                <React.Fragment>
                    <div className="lg:col-span-1 md:border md:border-gray-200 p-4 md:rounded md:shadow-lg max-h-[355px]">
                        <div className="mx-auto">
                            <UserAvatar width="w-28 lg:w-36" height="h-28 lg:h-36" center profilePicturePath={userInformation?.profilePicturePath} />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-bold mt-2">{userName}</h3>
                            <p className="text-sm">{userEmail}</p>
                        </div>
                        <button className="mt-4 p-1 w-full h-10 rounded border border-gray-300 hover:bg-gray-200">
                            <Link className="block h-full w-full leading-[30px]" to="/user/settings">Edit Profile</Link>
                        </button>
                        <div className="grid grid-cols-3 mt-4 gap-8 text-center">
                            <div className="col-span-1">
                                <span className="block font-bold">18</span>
                                <span className="text-sm">Followers</span>
                            </div>
                            <div className="col-span-1">
                                <span className="block font-bold">11</span>
                                <span className="text-sm">Following</span>
                            </div>
                            <div className="col-span-1">
                                <span className="block font-bold">{userBlogs.length}</span>
                                <span className="text-sm">Posts</span>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
            <div className="p-4  md:border md:border-gray-200 md:shadow-lg md:mt-6 md:rounded lg:mt-0 lg:col-span-3">
                <nav className="border-b border-slate-200">
                    <button
                        onClick={() => {
                            setIsBlogs(true);
                            setIsSaved(false);
                        }}
                        className={`text-sm text-gray-750 uppercase py-2 px-4 ${isBlogs && " text-black border-b-2 border-sky-500 font-semibold"}`}
                    >
                        <span className="flex items-center justify-center">
                            <BsVectorPen className="text-gray-650" />
                            <span className="ml-2">BLOGS ({userBlogs.length})</span>
                        </span>
                    </button>
                    <button
                        onClick={() => {
                            setIsBlogs(false);
                            setIsSaved(true);
                        }}
                        className={`text-sm text-gray-750 uppercase py-2 px-4 ${isSaved && "text-black border-b-2 border-sky-500 font-semibold"}`}
                    >
                        <span className="flex items-center justify-center">
                            <BsBookmark className="text-gray-650" />
                            <span className="ml-2">SAVED</span>
                        </span>
                    </button>
                </nav>
                {isBlogs && <div className="grid md:grid-cols-3 gap-8 lg:gap-4 mt-4">
                    {userBlogs.map(({ _id, title, subTitle, picturePath, likes }) => (
                        userBlogsLoading ? <CardPlaceholder key={_id} isProfilePicture={false} /> :
                            <UserArticle
                                key={_id}
                                id={_id}
                                title={title}
                                subtitle={subTitle}
                                picturePath={picturePath}
                                likes={likes}
                            />
                    ))}
                </div>}
                {isSaved && savedBlogs.map(({
                    _id: saveId,
                    authorId,
                    blogId: { _id, title, subTitle, category, picturePath, likes, isSaved }
                }) => (
                    savedBlogsLoading ? <CardPlaceholder key={_id} isProfilePicture={false} /> :
                        <div className="mt-4">
                            <Article
                                key={_id}
                                id={_id}
                                title={title}
                                subTitle={subTitle}
                                category={category}
                                picturePath={picturePath}
                                likes={likes}
                                userId={authorId._id}
                                userName={authorId.username}
                                profilePicturePath={authorId.profilePicturePath}
                                isSaved={isSaved}
                                saveId={saveId}
                            />
                        </div>
                ))}
            </div>
        </Container>
    );
}