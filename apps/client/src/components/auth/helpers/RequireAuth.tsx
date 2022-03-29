import { useAuth } from "../../../contexts/AuthContext";
import { Navigate, useLocation } from 'react-router-dom'

export default function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useAuth()
    const location = useLocation()
  
    if (!auth.loggedIn) {
      return <Navigate to="/auth/sign_in" state={{ from: location }} replace />;
    }
  
    return children;
  }