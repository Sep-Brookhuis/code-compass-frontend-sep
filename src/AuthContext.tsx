import { createContext, useContext, useState } from "react";

type AuthContextType = {
  name: string;
  role: string;
  login_user: (username: string, userRole: string) => void;
  logout_user: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// @ts-ignore
export function AuthProvider({ children }) {
  const [name, setName] = useState(() => localStorage.getItem("authName") || "");
  const [role, setRole] = useState(() => localStorage.getItem("authRole") || "");

  const login_user = (username: string, userRole: string) => {
    setName(username);
    setRole(userRole);
    localStorage.setItem("authName", username);
    localStorage.setItem("authRole", userRole);
  };

  const logout_user = () => {
    setName("");
    setRole("");
    localStorage.removeItem("authName");
    localStorage.removeItem("authRole");
  };

  return (
    <AuthContext.Provider value={{ login_user,  logout_user, name, role }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}