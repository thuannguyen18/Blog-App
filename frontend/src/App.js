import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./routes/PrivateRoute";
import User from "./components/user/User";
import Settings from "./components/user/Settings";
import PostEditor from "./components/post/PostEditor";
import PostDetail from "./components/post/PostDetail";
import { useGlobalContext } from "./context/context";

function App() {
    const { isAuthenticated, getUser } = useGlobalContext();

    useEffect(() => {
        if (isAuthenticated)
            getUser();
    }, [isAuthenticated]);

    return (
        <>
            <Header />
            <main className="container mx-auto">
                <Routes>
                    {/* Public Route */}
                    <Route path="/" element={<>Home Page</>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* Private Route */}
                    <Route path="/editor" element={<PrivateRoute auth={{ isAuthenticated }}><PostEditor /></PrivateRoute>} />
                    <Route path="/user" element={<PrivateRoute auth={{ isAuthenticated }}><User /></PrivateRoute>} />
                    <Route path="/settings" element={<PrivateRoute auth={{ isAuthenticated }}><Settings /></PrivateRoute>} />
                    <Route path="/blog/:id" element={<PrivateRoute auth={{ isAuthenticated }}><PostDetail /></PrivateRoute>} />
                </Routes>
            </main>
        </>
    );
}

export default App;