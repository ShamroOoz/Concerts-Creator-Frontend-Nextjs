import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_URL, NEXT_URL } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
   const router = useRouter;()
  // Register user
  const register = async (user) => {
    console.log(user);
  };

  // Login user
  const login = async ({ email: identifier, password }) => {
      console.log({ identifier, password });
       const res = await fetch(`${NEXT_URL}/login`, {
         method: "POST",
         body: { identifier, password },
       });
      const user = await res.json();
      setUser(user);
  };

  // Logout user
  const logout = async () => {
    console.log("Logout");
  };

  // Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    console.log("Check");
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
