import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouter = ({
  isAllowed,
  children,
  redirectTo = "/login",
}) => {
  const module = sessionStorage.getItem("module");
  module ? (redirectTo = `/bodega`) : (redirectTo = "/login");
  if (!isAllowed) {
     window.location.reload();
    return  <Navigate to={redirectTo} />;

    
    
  }
  // const navigate = useNavigate()
  return children ? children : <Outlet />;
};
