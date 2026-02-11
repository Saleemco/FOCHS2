import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DashboardPreview from '../components/DashboardPreview';

const LandingPage = ({ onEnterDashboard }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero onEnterDashboard={onEnterDashboard} />
      <DashboardPreview />
    </div>
  );
};

export default LandingPage;