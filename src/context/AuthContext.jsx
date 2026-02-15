import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from '../utils/axios'; // 👈 IMPORT YOUR CONFIGURED AXIOS INSTANCE

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Add token to axios headers
  const setAuthToken = (token) => {
    if (token) {
      // Set token on the imported axios instance, not the default
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
    }
  };

  // Login user
  const login = async (email, password) => {
    try {
      setError(null);
      const response = await axios.post('/auth/login', { email, password });
      const { token, ...userData } = response.data;
      
      setAuthToken(token);
      setUser(userData);
      
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    }
  };

  // Register user
  const register = async (userData) => {
    try {
      setError(null);
      const response = await axios.post('/auth/register', userData);
      const { token, ...user } = response.data;
      
      setAuthToken(token);
      setUser(user);
      
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    }
  };

  // Logout user
  const logout = () => {
    setAuthToken(null);
    setUser(null);
  };

  // Load user from token
  const loadUser = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      setLoading(false);
      return;
    }

    setAuthToken(token);

    try {
      const response = await axios.get('/auth/me');
      setUser(response.data);
    } catch (err) {
      setAuthToken(null);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'ADMIN',
    isPrincipal: user?.role === 'PRINCIPAL',
    isTeacher: user?.role === 'TEACHER',
    isParent: user?.role === 'PARENT',
    isStudent: user?.role === 'STUDENT',
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};