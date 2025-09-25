// ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// @ts-ignore
export default function ProtectedRoute({ children }) {
  const { name, role } = useAuth();

  if (!name || role !== "ADMIN") {
      console.log(name, role)
    return <Navigate to="/403" replace />;
  }

  return children;
}
