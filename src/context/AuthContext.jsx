import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

// Mock user for testing - MAKE SURE ROLE IS ADMIN
const MOCK_USER = {
  id: '1',
  email: 'admin@srms.com',
  firstName: 'Admin',
  lastName: 'User',
  role: 'ADMIN',  // ✅ Must be ADMIN to access admin dashboard
  isActive: true
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock login - always succeeds with demo credentials
  const login = async (email, password) => {
    try {
      setError(null);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Check if using demo credentials
      if (email === 'admin@srms.com' && password === 'admin123') {
        setUser(MOCK_USER);
        localStorage.setItem('user', JSON.stringify(MOCK_USER));
        return MOCK_USER;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err.message || 'Login failed');
      throw err;
    }
  };

  // Mock register
  const register = async (userData) => {
    try {
      setError(null);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newUser = {
        id: Date.now().toString(),
        ...userData,
        role: userData.role || 'TEACHER'
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return newUser;
    } catch (err) {
      setError(err.message || 'Registration failed');
      throw err;
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
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