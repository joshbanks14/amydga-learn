import { useContext, useState, createContext } from "react";

type PortalContextType = {
  pageType: AccountPage;
  setPageType: (pageType: AccountPage) => void;
};

type AccountPage = "login" | "signup";

const PortalContext = createContext<PortalContextType>({
  pageType: "login",
  setPageType: () => undefined,
});

export function usePortal() {
  return useContext(PortalContext);
}

export function PortalProvider({ children }: any) {
  const [pageType, setPageType] = useState<AccountPage>("login");

  const value = {
    pageType,
    setPageType,
  };

  return (
    <PortalContext.Provider value={value}>{children}</PortalContext.Provider>
  );
}
