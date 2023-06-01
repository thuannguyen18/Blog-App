import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./routes/PrivateRoute";
import { useGlobalContext } from "./context/context";

function App() {
    const { isAuthenticated, getUser, logout } = useGlobalContext();
    const LogOut = () => <button onClick={logout}>logout</button>

    useEffect(() => {
        getUser();
    }, [isAuthenticated]);

    return (
        <>
            <Header />
            <main className="container mx-auto">
                <Routes>
                    <Route path="/" element={<LogOut />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<PrivateRoute auth={{ isAuthenticated }}>Dash Board & <LogOut /></PrivateRoute>} />
                </Routes>
            </main>
        </>
    );
}

export default App;