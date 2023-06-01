import { Navigate } from "react-router-dom";

function PrivateRoute({ auth: { isAuthenticated }, children }) {
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;