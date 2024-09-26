import React, { createContext, useContext, FC, useState, useMemo } from 'react';

type HeaderCollapseProviderProps = { children: React.ReactNode };

const headerCollapseContext = createContext<State | undefined>(undefined);
type State = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const useHeaderCollapse = () => {
  const context = useContext(headerCollapseContext);
  if (context === undefined) {
    throw new Error(
      'useHeaderCollapse must be used within a HeaderCollapseProvider',
    );
  }
  return context;
};

const HeaderCollapseProvider: FC<HeaderCollapseProviderProps> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const value = useMemo(() => {
    return {
      collapsed,
      setCollapsed,
    };
  }, [collapsed]);

  return (
    <headerCollapseContext.Provider value={value}>
      {children}
    </headerCollapseContext.Provider>
  );
};
export { HeaderCollapseProvider, useHeaderCollapse };
