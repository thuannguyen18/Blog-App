import { Link } from "react-router-dom";

function NoBlog() {
    return (
        <div className="flex justify-center">
            <div className="mt-4 w-1/4 text-center">
                <h1 className="text-xl mb-4">NO BLOGS IN HERE</h1>
                <Link to="/editor" className="bg-green-600 text-white p-2 rounded">
                    Create Blog
                </Link>
            </div>
        </div>
    );
}

export default NoBlog;