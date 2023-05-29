import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";

function App() {
    return (
        <Router>
            <Header />
            <main className="container mx-auto">
                <Routes>
                    <Route path="/" element={<>HOME PAGE</>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;