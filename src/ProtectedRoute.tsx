// ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { name } = useAuth();
    console.log(name)
  // If not logged in, redirect to /login
  if (!name) {
    return <Navigate to="/403" replace />;
  }

  // If logged in and role is allowed, render the protected content
  return children;
}
