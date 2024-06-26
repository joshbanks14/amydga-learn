import { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../../firebase/firebase";
import { User, UserCredential, onAuthStateChanged } from "firebase/auth";

type AuthContext = {
  userLoggedIn: boolean;
  setUserLoggedIn: (userLoggedIn: boolean) => void;
  currentUser: UserCredential | null;
  setCurrentUser: (currentUser: UserCredential | null) => void;
};

const AuthContext = createContext<AuthContext>({
  userLoggedIn: false,
  setUserLoggedIn: () => undefined,
  currentUser: null,
  setCurrentUser: () => undefined,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<UserCredential | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const value = {
    userLoggedIn,
    setUserLoggedIn,
    currentUser,
    setCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
