import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./routes/PrivateRoute";
import User from "./components/user/User";
import { useGlobalContext } from "./context/context";

function App() {
    const { isAuthenticated, getUser } = useGlobalContext();

    useEffect(() => {
        getUser();
    }, [isAuthenticated]);

    return (
        <>
            <Header />
            <main className="container mx-auto">
                <Routes>
                    <Route path="/" element={<>Home Page</>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/post" element={<PrivateRoute auth={{ isAuthenticated }}>Post</PrivateRoute>} />
                    <Route path="/user" element={<PrivateRoute auth={{ isAuthenticated }}><User /></PrivateRoute>} />
                    <Route path="/settings" element={<PrivateRoute auth={{ isAuthenticated }}>Settings</PrivateRoute>} />
                </Routes>
            </main>
        </>
    );
}

export default App;