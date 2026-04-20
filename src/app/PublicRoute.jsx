import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Loading from "../components/common/Loading";

function PublicRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <Loading />;
    }

    if (user) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default PublicRoute;