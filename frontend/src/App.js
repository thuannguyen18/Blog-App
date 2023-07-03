import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { useGlobalContext } from "./context/context";
import { publicRoutes } from "./routes/public";
import { privateRoutes } from './routes/private';
import PrivateRoute from "./routes/private";

function App() {
    const { isAuthenticated, getUser } = useGlobalContext();

    // useEffect(() => {
    //     if (isAuthenticated)
    //         getUser();
    // }, [isAuthenticated]);

    return (
        <>
            <Header />
            <main className="">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Element = route.element;
                        return <Route key={index} path={route.path} element={<Element />} />;
                    })}
                    {privateRoutes.map((route, index) => {
                        const Element = route.element;
                        return (
                            <Route key={index} path={route.path} element={
                                <PrivateRoute auth={{ isAuthenticated }}>
                                    <Element />
                                </PrivateRoute>
                            } />
                        );
                    })}
                </Routes>
            </main>
        </>
    );
}

export default App;