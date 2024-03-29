import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";

import { token } from 'constants';
import { publicRoutes, authRoutes } from "routes/public";
import { privateRoutes } from 'routes/private';
import PrivateRoute from "routes/private";
import Layout from "pages/layout";
import NotFound from "pages/error";

export default function App() {
    return (
        <main className="app">
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Layout />}>
                    {publicRoutes.map((route, index) => {
                        const Element = route.element;
                        return <Route key={index} path={route.path} element={<Element />} />;
                    })}
                    {privateRoutes.map((route, index) => {
                        const Element = route.element;
                        return (
                            <Route key={index} path={route.path} element={
                                <PrivateRoute auth={{ token }}>
                                    <Element />
                                </PrivateRoute>
                            } />
                        );
                    })}
                </Route>
                {authRoutes.map((route, index) => {
                    const Element = route.element;
                    return <Route key={index} path={route.path} element={<Element />} />;
                })}
            </Routes>
            <ToastContainer autoClose={3000} theme="colored" transition={Zoom} />
        </main>
    );
}