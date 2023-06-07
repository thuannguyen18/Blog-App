import { useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import { useEffect } from "react";

function PostDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { getBlog, article, deleteBlog } = useGlobalContext();

    useEffect(() => {
        getBlog(id);
    }, []);

    const handleDelete = () => {
        deleteBlog(id);
    }
   
    const handleEdit = () => {
        navigate("/editor");
    }

    return (
        <div>
            {id}
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default PostDetail;