import Home from "pages/home";
import Login from "pages/auth/login";
import Register from "pages/auth/register";

export const publicRoutes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/login',
        element: Login
    },
    {
        path: '/register',
        element: Register
    }
];