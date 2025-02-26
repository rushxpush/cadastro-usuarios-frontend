import React, { createContext, useContext, useEffect, useState } from "react";
import { apiLogin } from "../components/api/authAPI";
import { clearAuthToken, getAuthToken, setAuthToken } from "../utils/storage";
import { useNavigate } from "react-router";

interface AuthContextType {
  token: string;
  isLoading: boolean;
  isValid: boolean;
  login: (name: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
  const [ token, setToken ] = useState('');
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isValid, setIsValid ] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = getAuthToken();
    
    if (storedToken) { 
      setToken(storedToken) 
    };

    setIsLoading(false)
  }, []);

  const login = async (name: string, password: string) => {
    const token = await apiLogin(name, password);
    console.log('token: ', token)
    if (!token) return;

    setAuthToken(token);
    setToken(token);
    navigate('/cadastrar-usuario');
  }

  const logout = (): void => {
    clearAuthToken();
    setToken('');
    navigate('/login');
  }
  
  return (
    <AuthContext.Provider value={{ token, isLoading, isValid, login, logout }}>
      { children }
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro do AuthProvider');
  return context;
}