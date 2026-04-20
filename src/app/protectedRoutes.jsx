import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Loading from "../components/common/Loading";

function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }


    return children;
}

export default ProtectedRoute;