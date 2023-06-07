import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Loading from "../Loading";
import { useGlobalContext } from "../../context/context";
import Input from "../Input";

function PostUpdate() {
    const { state: id } = useLocation();
    const {
        articleTitle,
        articleContent,
        setTitleUpdate,
        setContentUpdate,
        updateBlog,
        loading,
        getBlog,
    } = useGlobalContext();

    useEffect(() => {
        getBlog(id);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        updateBlog(id);
    }

    // const button = loading ? <Loading /> : "Update Article";

    return (
        <div className="flex justify-center items-center" onSubmit={handleSubmit}>
            <form className="w-full lg:w-3/5 px-4 mt-8">
                <h1 className="text-4xl font-lg text-center mb-4">Edit Your Article</h1>
                <Input type="text" placeholder="Article Title" value={articleTitle} onChange={setTitleUpdate} />
                <Input type="textarea" placeholder="Write your article (in markdown)" value={articleContent} onChange={setContentUpdate} /> 
                <button className="w-full h-12 lg:w-40 bg-gray-800 text-white text-xl float-right border rounded-lg">
                    Update Article
                </button>
            </form>
        </div>
    );
}

export default PostUpdate;