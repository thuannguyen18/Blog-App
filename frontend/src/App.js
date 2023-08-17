import { Routes, Route } from "react-router-dom";
import { useGlobalContext } from "context/context";
import { publicRoutes, authRoutes } from "routes/public";
import { privateRoutes } from 'routes/private';
import PrivateRoute from "routes/private";
import Header from "components/Header";
import NotFound from "pages/error";

export default function App() {
    const { isAuthenticated } = useGlobalContext();

    return (
        <main className="app">
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Header />}>
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
                </Route>
                {authRoutes.map((route, index) => {
                    const Element = route.element;
                    return <Route key={index} path={route.path} element={<Element />} />;
                })}
            </Routes>
        </main>
    );
}