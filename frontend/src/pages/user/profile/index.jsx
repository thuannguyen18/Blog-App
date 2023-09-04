import React, { useEffect } from "react";
import Container from "components/Container";
import CardPlaceholder from "components/skeleton/CardPlaceholder";
import UserInfoPlaceholder from "components/skeleton/UserInfoPlaceholder";
import UserArticle from "components/article/UserArticle";
import UserAvatar from "components/user/UserAvatar";
import { useGlobalContext } from "context/context";

export default function Profile() {
    const {
        loading,
        getAllUserBlog,
        userId,
        userName,
        userEmail,
        userProfilePicturePath,
        userBlogs,
    } = useGlobalContext();

    useEffect(() => {
        getAllUserBlog(userId);
    }, []);

    return (
        <Container styles={"lg:grid lg:grid-cols-4 lg:gap-4 md:mt-8"}>
            {loading ? <UserInfoPlaceholder /> :
                <React.Fragment>
                    <div className="lg:col-span-1 md:border md:border-gray-200 p-4 md:rounded md:shadow-lg max-h-[355px]">
                        <div className="mx-auto">
                            <UserAvatar width="w-28 lg:w-36" height="h-28 lg:h-36" center profilePicturePath={userProfilePicturePath} />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-bold mt-2">{userName}</h3>
                            <p className="text-sm">{userEmail}</p>
                        </div>
                        <button className="mt-4 p-1 w-full h-10 rounded border border-gray-300 hover:bg-gray-200">Edit Profile</button>
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
                        className={`font-semibold h-10 w-32`}
                    >
                        POSTS
                    </button>
                </nav>
                <div className="grid md:grid-cols-3 gap-8 lg:gap-4 mt-4">
                    {userBlogs.map(({ _id, title, subTitle, picturePath, likes }) => (
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
    );
}