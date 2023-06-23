import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouter = ({
  isAllowed,
  children,
  redirectTo = "/login",
}) => {
  const module = localStorage.getItem("module");
  module ? (redirectTo = `/${module}`) : (redirectTo = "/login");
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  // const navigate = useNavigate()
  return children ? children : <Outlet />;
};
