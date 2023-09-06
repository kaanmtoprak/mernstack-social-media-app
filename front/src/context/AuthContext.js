import { createContext, useContext, useMemo } from "react";
import axios from 'axios';
import { useLocalStorage } from "../utilities/functions/useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const login = async (data) => {
            setUser(data);
    };
    const logout = () => {
        setTimeout(()=>{
            setUser(null);
        },1000)
    };

  const verify = async (token) =>{
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/verified`,token,{ headers: { authorization:token} })

    return response
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      verify
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};