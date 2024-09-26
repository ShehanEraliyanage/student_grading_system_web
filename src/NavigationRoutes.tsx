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

//================AUTH================
import Login from "./containers/login/login";

//===================================

interface RequireAuthProps {
  component: JSX.Element;
}

const RequireAuth = ({ component }: RequireAuthProps) => {
  const { isLoggedIn, permission } = useAuth();
  const location = useLocation();
  const history = useNavigate();

  if (!isLoggedIn) {
    return (
      <Navigate
        to={`/login?redirectTo=${location?.pathname}${location?.search}`}
      />
    );
  }

  if (isLoggedIn && permission) {
    history("/");
  }
  return component;
};

export default function NavigationRoutes() {
  const IndexPage = () => {
    const { permission } = useAuth();
    const history = useNavigate();

    useEffect(() => {
      if (permission) {
        history("/dashboard");
      } else {
        history("/login");
      }
    }, [permission]);

    return null;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
