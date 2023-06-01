import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";

function App() {

    const LogOut = () => <button onClick={() => localStorage.clear()}>logout</button>

    return (
        <>
            <Header />
            <main className="container mx-auto">
                <Routes>
                    <Route path="/" element={<LogOut />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
        </>
    );
}

export default App;