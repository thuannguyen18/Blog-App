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