import React from 'react';

const Dashboard = ({ onBackToLanding }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-indigo-600 mb-8">EduVerse</h2>
        <nav className="flex-1">
          <ul className="space-y-2">
            {['Overview', 'Students', 'Attendance', 'Grades', 'Messages', 'Settings'].map((item) => (
              <li key={item}>
                <a href="#" className="block px-4 py-2.5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button 
          onClick={onBackToLanding}
          className="px-4 py-2.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors"
        >
          ← Back to Home
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Admin</h1>
          <div className="text-gray-600">
            Today: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="text-gray-600 text-sm mb-2">Total Students</h3>
            <div className="text-3xl font-bold text-indigo-600">2,847</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="text-gray-600 text-sm mb-2">Attendance Rate</h3>
            <div className="text-3xl font-bold text-emerald-600">94.5%</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="text-gray-600 text-sm mb-2">Today's Attendance</h3>
            <div className="text-3xl font-bold text-amber-600">92%</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;