import React from "react";
import moment from "moment";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useGlobalContext } from "context/context";

export default function Draft({ id, title, content, createdAt }) {
    // Global State
    const { deleteDraft, openEditorMode, setDraftUpdate } = useGlobalContext();

    // Delete draft 
    const handleDelete = () => {
        deleteDraft(id);
    }

    // Update draft
    const handleUpdate = () => {
        openEditorMode();
        setDraftUpdate({ title, content });
    }

    return (
        <div className="shadow-md p-[30px] h-[111px] border border-gray-850 my-4">
            <Link to="/blog/editor" className="text-black-150 font-semibold" onClick={handleUpdate}>{title}</Link>
            <div className="flex items-center justify-between">
                <span className="text-xs text-gray-250">{moment(createdAt).fromNow()}</span>
                <span className="flex items-center justify-between">
                    <button className="text-sm py-1 px-2 ml-4 flex items-center rounded hover:bg-gray-250 hover:text-white transition">
                        <BsPencilSquare />
                        <span className="ml-1" onClick={handleUpdate}>
                            <Link to="/blog/editor">Continue</Link>
                        </span>
                    </button>
                    <button className="text-sm py-1 px-2 ml-4 flex items-center rounded text-red-400 hover:bg-red-400 hover:text-white transition">
                        <BsTrash />
                        <span className="ml-1" onClick={handleDelete}>Delete</span>
                    </button>
                </span>
            </div>
        </div>
    );
}