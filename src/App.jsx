import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <>
      {currentPage === 'landing' ? (
        <LandingPage onEnterDashboard={() => setCurrentPage('dashboard')} />
      ) : (
        <Dashboard onBackToLanding={() => setCurrentPage('landing')} />
      )}
    </>
  );
}

export default App;