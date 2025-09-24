// AuthContext.tsx
import { createContext, useContext, useState } from "react";

type AuthContextType = {
  name: string;
  role: string;
  loginAsAdmin: () => void;
  loginAsTrainee: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export function AuthProvider({ children }) {
  const [name, setName] = useState("sep");
  const [role, setRole] = useState("");

  const loginAsAdmin = () => {
   console.log("login admin")
    setName("sep");
    setRole("admin");
  };

  const loginAsTrainee = () => {
    console.log("login trainee")
      setName("joost");
    setRole("trainee");
  };

  const logout = () => {
   console.log("logout")
    setName("");
    setRole("");
  };

  return (
    <AuthContext.Provider value={{ name, role, loginAsAdmin, loginAsTrainee, logout }}>
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
