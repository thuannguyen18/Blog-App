import { useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import { useEffect } from "react";

function PostDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { 
        getBlog, 
        articleTitle, 
        articleContent, 
        deleteBlog 
    } = useGlobalContext();

    useEffect(() => {
        getBlog(id);
    }, []);

    const handleDelete = () => {
        deleteBlog(id);
    }
   
    const handleEdit = () => {
        navigate("/update", { state: id });
    }

    return (
        <div>
            {id}
            <h1>{articleTitle}</h1>
            <p>{articleContent}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default PostDetail;