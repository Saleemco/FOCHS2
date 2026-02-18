import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import AdminDashboard from './pages/AdminDashboard';  // 👈 IMPORT THE REAL COMPONENT

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
          {/* 🏠 PUBLIC LANDING PAGE - FIRST THING VISITORS SEE */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes - User dashboard */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<ComingSoon />} />
            <Route path="/attendance" element={<ComingSoon />} />
            <Route path="/grades" element={<ComingSoon />} />
            <Route path="/payments" element={<ComingSoon />} />
            <Route path="/announcements" element={<ComingSoon />} />
          </Route>
          
          {/* Admin only routes - Protected with role check - USING THE REAL COMPONENT */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute allowedRoles={['ADMIN', 'PRINCIPAL']}>
                <AdminDashboard />  {/* 👈 NOW USING THE REAL COMPONENT */}
              </ProtectedRoute>
            } 
          />
          
          {/* Unauthorized page */}
          <Route path="/unauthorized" element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
              <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 text-4xl font-bold mx-auto mb-6">
                  🚫
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Unauthorized Access</h1>
                <p className="text-gray-600 mb-6">You don't have permission to view this page.</p>
                <a href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition">
                  Go to Homepage
                </a>
              </div>
            </div>
          } />
          
          {/* Catch any unknown routes - redirect to landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;