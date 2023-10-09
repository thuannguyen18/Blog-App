import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsBookmark, BsVectorPen } from "react-icons/bs";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { useGlobalContext } from "context/context";
import { userInformation } from "constants";
import Article from "components/article/Articles";
import Container from "components/Container";
import CardPlaceholder from "components/skeleton/CardPlaceholder";
import ProfileCardPlaceholder from "components/skeleton/ProfileCardPlaceholder";
import UserArticle from "components/article/UserArticle";
import UserAvatar from "components/user/UserAvatar";
import Draft from "components/Draft";

export default function Profile() {
    // Global State
    const {
        loading,
        getUser,
        userBlogsLoading,
        userBlogs,
        getSavedBlogs,
        savedBlogsLoading,
        savedBlogs,
        userFollowersCount,
        userFollowingCount,
        getAllDrafts,
        drafts,
    } = useGlobalContext();

    // Local State
    const [isBlogs, setIsBlogs] = useState(true);
    const [isSave, setIsSave] = useState(false);
    const [isDraft, setIsDraft] = useState(false);


    // User stats info 
    const stats = [
        {
            title: "Followers",
            infor: userFollowersCount,
        },
        {
            title: "Following",
            infor: userFollowingCount,
        },
        {
            title: "Posts",
            infor: userBlogs.length,
        },
    ];

    // When user click button "Blog"
    const handleChangeBlog = () => {
        setIsBlogs(true);
        setIsSave(false);
        setIsDraft(false);
    }

    // When user click button "Saved"
    const handleChangeSave = () => {
        setIsBlogs(false);
        setIsSave(true);
        setIsDraft(false);
    }

    // When user click button "Draft"
    const handleChangeDraft = () => {
        setIsBlogs(false);
        setIsSave(false);
        setIsDraft(true);
    }

    // Get user's blogs 
    useEffect(() => {
        getUser();
    }, [isBlogs]);

    // Get user's saved blogs 
    useEffect(() => {
        if (isSave) {
            getSavedBlogs();
        }
    }, [isSave]);

    // Get user's drafts 
    useEffect(() => {
        if (isDraft) {
            getAllDrafts();
        }
    }, [isDraft]);

    return (
        <div className="">
            <Container styles={"lg:grid lg:grid-cols-4 lg:gap-4 md:mt-8"}>
                {loading ?
                    <ProfileCardPlaceholder /> :
                    <div className="lg:col-span-1 md:border md:border-gray-200 p-4 md:rounded md:shadow-lg max-h-[355px]">
                        <div className="mx-auto">
                            <UserAvatar width="w-28 lg:w-36" height="h-28 lg:h-36" center profilePicturePath={userInformation?.profilePicturePath} />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-bold mt-2">{userInformation.username}</h3>
                            <p className="text-sm">{userInformation.email}</p>
                        </div>
                        <button className="mt-4 p-1 w-full h-10 rounded border border-gray-300 hover:bg-gray-200">
                            <Link className="block h-full w-full leading-[30px]" to="/user/settings">Edit Profile</Link>
                        </button>
                        <div className="grid grid-cols-3 mt-4 gap-8 text-center">
                            {stats.map(stat => (
                                <div key={stat.title} className="col-span-1">
                                    <span className="block font-bold">{stat.infor}</span>
                                    <span className="text-sm">{stat.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                }
                <div className="p-4 md:border md:border-gray-200 md:shadow-lg md:mt-6 md:rounded lg:mt-0 lg:col-span-3">
                    <nav className="border-b border-slate-200">
                        <button
                            onClick={handleChangeBlog}
                            className={`text-sm text-gray-750 uppercase py-2 px-4 ${isBlogs && " text-black border-b-2 border-sky-500 font-semibold"}`}
                        >
                            <span className="flex items-center justify-center">
                                <BsVectorPen className="text-gray-650" />
                                <span className="ml-2">BLOGS ({userBlogs.length})</span>
                            </span>
                        </button>
                        <button
                            onClick={handleChangeSave}
                            className={`text-sm text-gray-750 uppercase py-2 px-4 ${isSave && "text-black border-b-2 border-sky-500 font-semibold"}`}
                        >
                            <span className="flex items-center justify-center">
                                <BsBookmark className="text-gray-650" />
                                <span className="ml-2">SAVED</span>
                            </span>
                        </button>
                        <button
                            onClick={handleChangeDraft}
                            className={`text-sm text-gray-750 uppercase py-2 px-4 ${isDraft && "text-black border-b-2 border-sky-500 font-semibold"}`}
                        >
                            <span className="flex items-center justify-center">
                                <MdOutlineStickyNote2 className="text-gray-650" />
                                <span className="ml-2">DRAFT</span>
                            </span>
                        </button>
                    </nav>
                    {
                        isBlogs &&
                        <div className="grid md:grid-cols-3 gap-8 lg:gap-4 mt-4">
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
                        </div>
                    }
                    {
                        isSave &&
                        savedBlogs.map(({ _id: saveId, authorId, blogId, isSaved }) => (
                            savedBlogsLoading ?
                                <CardPlaceholder key={blogId._id} isProfilePicture={false} /> :
                                <div className="mt-4">
                                    <Article
                                        key={blogId._id}
                                        topic={blogId}
                                        authorId={authorId}
                                        saveId={saveId}
                                        isSaved={isSaved}
                                    />
                                </div>
                        ))
                    }
                    {
                        isDraft &&
                        drafts.map(draft => (
                            <Draft
                                key={draft._id}
                                id={draft._id}
                                title={draft.title}
                                content={draft.content}
                                createdAt={draft.createdAt}
                            />
                        ))
                    }
                </div>
            </Container>
        </div>
    );
}