import { Navigate } from "react-router-dom";

import PostEditor from "../components/post/PostEditor";
import User from "../components/user/User";
import Settings from "../components/user/Settings";
import Blogs from "../components/Blogs";
import PostDetail from "../components/post/PostDetail";
import PostUpdate from "../components/post/PostUpdate";

export const privateRoutes = [
    {
        path: '/editor',
        element: PostEditor
    },
    {
        path: '/user',
        element: User
    },
    {
        path: '/settings',
        element: Settings
    },
    {
        path: '/blogs',
        element: Blogs
    }, 
    {
        path: '/blog/:id',
        element: PostDetail
    },
    {
        path: '/update',
        element: PostUpdate
    }
];

function PrivateRoute({ auth: { isAuthenticated }, children }) {
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;