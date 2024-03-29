import Home from "pages/home";
import Blog from "pages/blog";
import Author from "pages/author";
import Category from "pages/category";
import Search from "pages/search";
import Login from "pages/auth/login";
import Register from "pages/auth/register";

export const publicRoutes = [
    {
        path: '/',
        element: Home
    },
    {
        path: "/user/:id",
        element: Author,
    },
    {
        path: "/blog/:id",
        element: Blog,
    },
    {
        path: "/category/:id",
        element: Category,
    },
    {
        path: "/search",
        element: Search
    }
];

export const authRoutes = [
    {
        path: '/login',
        element: Login
    },
    {
        path: '/register',
        element: Register
    },   
];