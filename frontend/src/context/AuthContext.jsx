
"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';


const AuthContext = createContext();

const apiUrl = process.env.NEXT_PUBLIC_API_URL;


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');
      
      if (token) {
        try {
         
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
          
          setUser({ role });
          setIsAdmin(role === 'ADMIN');
        } catch (error) {
          console.error('Auth verification failed:', error);
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          setUser(null);
          setIsAdmin(false);
        }
      }
      
      setLoading(false);
    };
    
    checkAuth();
  }, []);

  // Login function
  const login = async (formData) => {
    try {
      const response = await axios.post(`${apiUrl}/api/login`, formData);
      const { token, user } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('role', user.role);
      
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUser(user);
      setIsAdmin(user.role === 'ADMIN');
      
      return { success: true, user };
    } catch (error) {
      console.error('Login failed:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Invalid email or password' 
      };
    }
  };



  // Check user role
  const checkIsAdmin = () => {
    return isAdmin;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAdmin,
      loading, 
      login, 
      checkIsAdmin
    }}>
      {children}
    </AuthContext.Provider>
  );
}


export const useAuth = () => useContext(AuthContext);