import Home from "pages/home";
import Blog from "pages/blog";
import User from "pages/user";
import Category from "pages/category";
import Login from "pages/auth/login";
import Register from "pages/auth/register";

export const publicRoutes = [
    {
        path: '/',
        element: Home
    },
    {
        path: "/blog/:id",
        element: Blog,
    },
    {
        path: "/user/:id",
        element: User,
    },
    {
        path: "/category",
        element: Category,
    },
];

export const authRoutes = [
    {
        path: '/login',
        element: Login
    },
    {
        path: '/register',
        element: Register
    }
];