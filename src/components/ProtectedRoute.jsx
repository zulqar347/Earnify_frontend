import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const hasDeposited = localStorage.getItem("hasDeposited")
  if (!hasDeposited) {
    return <Navigate to="/deposit" replace />;
  }
  return children;
};

export default ProtectedRoute;