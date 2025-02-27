import { JSX } from "react";
import { useAuth } from "../../context/AuthContext"
import { Navigate } from "react-router";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { token, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!token) {
    return <Navigate to='/login' replace />;
  }

  return token ? children : <Navigate to='/login' replace />;
}