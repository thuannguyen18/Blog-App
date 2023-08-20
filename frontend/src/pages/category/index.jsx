import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ImagePlaceholder from "components/skeleton/ImagePlaceholder";
import { useGlobalContext } from "context/context";
import Article from "components/article/Articles";
import Container from "components/Container";

export default function Category() {
    const { id } = useParams();
    const {
        loading,
        getCategoryBlogs,
        categoryBlogs,
    } = useGlobalContext();

    useEffect(() => {
        getCategoryBlogs(id);
    }, []);

    return (
        <React.Fragment>
            <div className="bg-gradient-to-r from-blue-400 to-emerald-400 h-[400px]">
                <h1 className="text-center text-5xl uppercase font-bold text-white flex items-center justify-center h-full">{id}</h1>
            </div>
            <Container styles={"mt-4"}>
                <div className="h-[400px] grid grid-rows-4 grid-flow-col gap-2">
                    <Link className="row-span-4 col-span-6 bg-sky-200 relative overflow-hidden">
                        <div className={`block bg-[url(http://localhost:3500/assets/po47.png)] bg-no-repeat bg-cover h-full transition duration-300 ease-in-out hover:scale-125 hover:brightness-[0.5] brightness-[0.95]`}></div>
                        <h2 className="absolute top-[80%] text-lg text-white font-semibold px-3 text-center">Red Dead Redemption 2 Mod Restores Cut Dialogue Red Dead Redemption 2 Mod Restores Cut Dialogue  Dialogue Red Dead Redemption 2 Mod Restores Cut Dialogue</h2>
                    </Link>
                    <div className="row-span-2 col-span-6 grid grid-cols-2 gap-2">
                        <Link className="relative overflow-hidden col-span-1">
                            <div className={`block bg-[url(http://localhost:3500/assets/po37.png)] bg-no-repeat bg-cover h-full transition duration-300 ease-in-out hover:scale-125 hover:brightness-[0.5] brightness-[0.9]`}></div>
                            <h2 className="absolute top-[75%] text-sm text-white font-semibold px-3">Red Dead Redemption 2 Mod Restores Cut Dialogue</h2>
                        </Link>
                        <Link className="relative overflow-hidden col-span-1">
                            <div className={`block bg-[url(http://localhost:3500/assets/po38.png)] bg-no-repeat bg-cover h-full transition duration-300 ease-in-out hover:scale-125 hover:brightness-[0.5] brightness-[0.9]`}></div>
                            <h2 className="absolute top-[75%] text-sm text-white font-semibold px-3">Red Dead Redemption 2 Mod Restores Cut Dialogue</h2>
                        </Link>
                    </div>
                    <div className="row-span-2 col-span-6 grid grid-cols-2 gap-2">
                        <Link className="relative overflow-hidden col-span-1">
                            <div className={`block bg-[url(http://localhost:3500/assets/po39.png)] bg-no-repeat bg-cover h-full transition duration-300 ease-in-out hover:scale-125 hover:brightness-[0.5] brightness-[0.9]`}></div>
                            <h2 className="absolute top-[75%] text-sm text-white font-semibold px-3">Red Dead Redemption 2 Mod Restores Cut Dialogue</h2>
                        </Link>
                        <Link className="relative overflow-hidden col-span-1">
                            <div className={`block bg-[url(http://localhost:3500/assets/po34.png)] bg-no-repeat bg-cover h-full transition duration-300 ease-in-out hover:scale-125 hover:brightness-[0.5] brightness-[0.9]`}></div>
                            <h2 className="absolute top-[75%] text-sm text-white font-semibold px-3">Red Dead Redemption 2 Mod Restores Cut Dialogue</h2>
                        </Link>
                    </div>
                </div>
                <div className="grid md:grid-cols-8 mt-4">
                    <div className="order-last col-span-6 lg:col-span-6 lg:order-first lg:pr-10">
                        <nav className="border-b border-slate-200">
                            <span className="border-l-4 border-sky-600 uppercase text-lg font-bold pl-2">{id} category</span>
                        </nav>
                        <div className="pt-6">
                            {categoryBlogs.map(({ _id, title, subTitle, category, userId, picturePath, likes }) => (
                                loading ? <ImagePlaceholder key={_id} /> : <Article
                                    key={_id}
                                    id={_id}
                                    userId={userId._id}
                                    userName={userId.username}
                                    profilePicturePath={userId.profilePicturePath}
                                    title={title}
                                    subTitle={subTitle}
                                    category={category}
                                    picturePath={picturePath}
                                    likes={likes}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-6 lg:col-span-2 h-96 bg-gray-400"></div>
                </div>
            </Container>
        </React.Fragment>
    );
}