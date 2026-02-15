import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage'; // 👈 IMPORT YOUR LANDING PAGE


// Temporary placeholder for pages not built yet
const ComingSoon = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h1>
      <p className="text-gray-600">This page is under construction.</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<ComingSoon />} />
            <Route path="/attendance" element={<ComingSoon />} />
            <Route path="/grades" element={<ComingSoon />} />
            <Route path="/payments" element={<ComingSoon />} />
            <Route path="/announcements" element={<ComingSoon />} />
          </Route>
          
          {/* Admin only routes */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute allowedRoles={['ADMIN', 'PRINCIPAL']}>
                <ComingSoon />
              </ProtectedRoute>
            } 
          />
          
          {/* Redirects */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;