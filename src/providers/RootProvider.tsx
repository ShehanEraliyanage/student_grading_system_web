import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./auth-context";
import { HeaderCollapseProvider } from "./header-collapse-context";

interface IRootProviderProps {
  children: React.ReactElement;
}

const RootProvider: React.FunctionComponent<IRootProviderProps> = ({
  children,
}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HeaderCollapseProvider>{children}</HeaderCollapseProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default RootProvider;
