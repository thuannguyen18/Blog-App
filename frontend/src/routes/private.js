import { Navigate } from "react-router-dom";
import Profile from "pages/user/profile";
import Settings from "pages/user/settings";
import EditorPost from "pages/post/editor";
import EditPost from "pages/post/edit";

import PostEditor from "../components/post/PostEditor";
import Blogs from "../components/Blogs";
import PostDetail from "../components/post/PostDetail";
import PostUpdate from "../components/post/PostUpdate";

export const privateRoutes = [
    {
        path: '/user',
        element: Profile,
    },
    {
        path: '/user/settings',
        element: Settings,
    },
    {
        path: "/blog/editor",
        element: EditorPost,
    },
    {
        path: "/blog/edit/:id",
        element: EditPost,
    },
];

function PrivateRoute({ auth: { isAuthenticated }, children }) {
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;