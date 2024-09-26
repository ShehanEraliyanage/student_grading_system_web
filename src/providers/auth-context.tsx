import { createContext, FC, useContext, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { AuthPayload } from "../types/auth.types";
import { message } from "antd";
import { useGetMe } from "../api/userHooks";
import { UserMeResponseI } from "../types/user.types";
import {
  getAuthPayloads,
  getStoredAuthToken,
  setAuthPayloads,
  storeAuthToken,
} from "../utils/storageUtil";
type AuthProviderProps = { children: React.ReactNode };

const AuthStateContext = createContext<State | undefined>(undefined);
type State = {
  isLoggedIn: boolean;
  currentUser: UserMeResponseI | null;
  setToken: (token: string) => void;
  setPermission: (permission: AuthPayload) => void;
  logout: () => void;
  isLoading: boolean;
  permission: AuthPayload;
  fetchUser: () => void;
  CurrentPlanLoading: boolean;
};

const useAuth = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, storeCurrentUser] = useState<UserMeResponseI | null>(
    null
  );
  const { data: userData, refetch, error, isLoading: isLoading } = useGetMe();
  const [token, setToken] = useState(getStoredAuthToken());
  const [permission, setPermission] = useState<any>(getAuthPayloads());

  const queryClient = useQueryClient();

  const fetchUser = () => {
    refetch();
  };

  useEffect(() => {
    if (token) {
      storeAuthToken(token);
      setAuthPayloads(permission);
      fetchUser();
    }
  }, [token, refetch]);

  useEffect(() => {
    storeCurrentUser(userData || null);
  }, [userData]);
  const logout = () => {
    setToken(null);
    setPermission(null);
    storeCurrentUser(null);
    queryClient.clear();
  };

  const CurrentPlanLoading = false;
  return (
    <AuthStateContext.Provider
      value={{
        currentUser,
        setToken,
        setPermission,
        permission,
        isLoggedIn: !!token,
        logout,
        isLoading: isLoading,
        fetchUser,
        CurrentPlanLoading,
      }}
    >
      {children}
    </AuthStateContext.Provider>
  );
};

export { AuthProvider, useAuth };
