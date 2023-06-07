import Input from "../Input";
import Loading from "../Loading";
import { useGlobalContext } from "../../context/context";

function PostEditor() {
    const {
        title,
        content,
        setTitle,
        setContent,
        createBlog,
        loading
    } = useGlobalContext();

    const handleSubmit = e => {
        e.preventDefault();
        createBlog();
    }

    const button = loading ? <Loading /> : "Publish Article";

    return (
        <div className="flex justify-center items-center" onSubmit={handleSubmit}>
            <form className="w-full lg:w-3/5 px-4 mt-8">
                <h1 className="text-4xl font-lg text-center mb-4">Start Creating Your Blog</h1>
                <Input type="text" placeholder="Article Title" value={title} onChange={setTitle} />
                <Input type="textarea" placeholder="Write your article (in markdown)" value={content} onChange={setContent} />
                <button className="w-full h-12 lg:w-40 bg-gray-800 text-white text-xl float-right border rounded-lg">
                    {button}
                </button>
            </form>
        </div>
    );
}

export default PostEditor;