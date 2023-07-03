import HomePage from "../components/HomePage";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

export const publicRoutes = [
    {
        path: '/',
        element: HomePage
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