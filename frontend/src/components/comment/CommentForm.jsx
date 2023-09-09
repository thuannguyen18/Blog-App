import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "context/context";
import Comment from "./Comment";
import NoComment from "components/NoComment";
import Loading from "components/Loading";

export default function FormComment() {
    const { id } = useParams();
    const {
        getComments,
        commentLoading,
        comments,
        getMoreComments,
        isFinalComment,
        isHasComment,
        postComment,
        postCommentLoading
    } = useGlobalContext();
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        postComment(id, content);
        getComments(id);
        setContent("");
    }

    const loadMoreCommentBtn = (!isFinalComment && isHasComment) && (
        <button
            className="h-10 w-full p-2 border-t border-slate-300 font-semibold hover:text-sky-500"
            onClick={() => getMoreComments(id)}
        >
            {commentLoading && <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-slate-900 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
            </svg>}
            Load more
        </button>
    );

    console.log(comments)

    const noComment = !isHasComment && <NoComment />;

    return (
        <div className="rounded border border-gray-200 p-5 lg:px-10 lg:pt-10 my-12 shadow-lg">
            <form
                onSubmit={handleSubmit}
                className="w-full bg-white rounded-lg px-4"
            >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-full lg:px-3 mb-2 mt-2">
                        <textarea
                            className="border-b border-gray-200 leading-normal resize-none w-full h-20 py-2 font-medium placeholder-gray-300 focus:outline-none focus:bg-white"
                            name="body"
                            placeholder="Type your feeling"
                            required
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="w-full md:w-full flex items-start md:w-full px-3">
                        <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                        </div>
                        <div className="-mr-1">
                            {postCommentLoading ?
                                <Loading width="w-4" heigth="h-4" /> :
                                <button
                                    type="submit"
                                    className="bg-sky-500 text-white font-medium py-1 px-4 border border-gray-300 rounded tracking-wide mr-1 hover:bg-sky-600"
                                >
                                    Post
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </form>
            <div className="mt-6">
                {comments.map(comment => (
                    <Comment
                        key={comment._id}
                        commentId={comment._id}
                        content={comment.content}
                        userInfo={comment.userId}
                    />
                ))}
            </div>
            {loadMoreCommentBtn}
            {noComment}
        </div>
    );
}