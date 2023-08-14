import Comment from "./Comment";
import { useGlobalContext } from "context/context";

export default function FormComment() {
    const { comments } = useGlobalContext();
    return (
        <div className="rounded border border-gray-200 p-5 lg:px-10 lg:pt-10 my-6 shadow-lg">
            <form className="w-full bg-white rounded-lg px-4 pt-2">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-full lg:px-3 mb-2 mt-2">
                        <textarea className="border-b border-gray-200 leading-normal resize-none w-full h-20 py-2 font-medium placeholder-gray-300 focus:outline-none focus:bg-white" name="body" placeholder="Type your feeling" required></textarea>
                    </div>
                    <div className="w-full md:w-full flex items-start md:w-full px-3">
                        <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                        </div>
                        <div className="-mr-1">
                            <button type="submit" className="bg-white text-gray-900 font-medium py-1 px-4 border border-gray-300 rounded tracking-wide mr-1 hover:bg-gray-100">Post</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="mt-6">
                {comments.map(comment => (
                    <Comment
                        key={comment._id}
                        content={comment.content}
                        userInfo={comment.userId}
                    />
                ))}
            </div>
            <button className="h-10 w-full mt-6 ">Load more</button>
        </div>
    );
}