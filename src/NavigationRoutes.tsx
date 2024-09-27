import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./providers/auth-context";

import Login from "./containers/login/login";
import Layout from "./layout/layout";
import Dashboard from "./containers/dashboard/Dashboard";

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to={`/login?redirectTo=${location?.pathname}${location?.search}`}
        replace
      />
    );
  }

  return children;
};

const AppLayout = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();

  if (location.pathname === "/login") {
    return children;
  }

  return <Layout>{children}</Layout>;
};

const IndexPage = () => {
  const { permission } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (permission) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [permission, navigate]);

  return null;
};

export default function NavigationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <RequireAuth>
              <AppLayout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </AppLayout>
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
