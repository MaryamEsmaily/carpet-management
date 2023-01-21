import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectPath = "/401", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
