import React, { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  FileText,
  CreditCard,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  DollarSign,
  TrendingUp,
  CheckCircle,
  UserPlus,
  PlusCircle,
  Mail
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  // Stats data from your screenshot
  const stats = [
    { 
      label: 'Total Students', 
      value: '2,847', 
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      bg: 'bg-blue-50'
    },
    { 
      label: 'Total Revenue', 
      value: '$48,574', 
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      bg: 'bg-green-50'
    },
    { 
      label: 'Active Teachers', 
      value: '156', 
      change: '+12.5%',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-600',
      bg: 'bg-purple-50'
    },
    { 
      label: 'Active Courses', 
      value: '48', 
      change: '+8.2%',
      icon: BookOpen,
      color: 'from-orange-500 to-red-600',
      bg: 'bg-orange-50'
    },
    { 
      label: 'Attendance Rate', 
      value: '94.5%', 
      change: '+3.1%',
      icon: CheckCircle,
      color: 'from-cyan-500 to-blue-600',
      bg: 'bg-cyan-50'
    },
  ];

  // Enrollment data for the chart
  const enrollmentData = [
    { month: 'Jan', students: 720 },
    { month: 'Feb', students: 750 },
    { month: 'Mar', students: 780 },
    { month: 'Apr', students: 820 },
    { month: 'May', students: 795 },
    { month: 'Jun', students: 770 },
    { month: 'Jul', students: 740 },
    { month: 'Aug', students: 790 },
    { month: 'Sep', students: 835 },
    { month: 'Oct', students: 847 },
    { month: 'Nov', students: 820 },
    { month: 'Dec', students: 780 },
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'teachers', label: 'Teachers', icon: GraduationCap },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'finance', label: 'Finance', icon: CreditCard },
  ];

  const quickActions = [
    { label: 'Add New Student', icon: UserPlus, color: 'bg-indigo-600 hover:bg-indigo-700' },
    { label: 'Create Course', icon: PlusCircle, color: 'bg-purple-600 hover:bg-purple-700' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 transform 
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 transition duration-200 ease-in-out
        z-30 w-64 bg-gradient-to-b from-indigo-900 to-purple-900 text-white
      `}>
        <div className="flex items-center justify-between p-4 border-b border-indigo-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-indigo-900 font-bold text-xl">
              S
            </div>
            <span className="font-bold text-xl">EduVerse</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X size={24} />
          </button>
        </div>

        <nav className="p-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(`/${item.id}`)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 text-indigo-100 hover:bg-indigo-800 transition-all"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-indigo-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {user?.firstName?.[0] || 'A'}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{user?.firstName || 'Admin'} {user?.lastName || 'User'}</p>
              <p className="text-xs text-indigo-300">{user?.email || 'admin@eduverse.com'}</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-indigo-800 rounded-lg transition">
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <button 
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="w-full flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-indigo-800 rounded-lg transition mt-1"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-20">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={24} />
            </button>

            <h1 className="text-2xl font-bold text-gray-900 lg:block hidden">Dashboard</h1>

            <div className="flex items-center gap-4 ml-auto">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {user?.firstName?.[0] || 'A'}
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-gray-900">{user?.firstName || 'Admin'} {user?.lastName || 'User'}</p>
                  <p className="text-xs text-gray-500">{user?.email || 'admin@eduverse.com'}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Admin</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your school today</p>
          </div>

          {/* Stats Grid - Exactly as in your screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white`}>
                    <stat.icon size={24} />
                  </div>
                  {stat.change && (
                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {stat.change}
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Enrollment Trends */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Student Enrollment Trends</h2>
                    <p className="text-sm text-gray-600 mt-1">Monthly enrollment statistics for 2024</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-indigo-600">847</p>
                      <p className="text-xs text-gray-500">Total Students</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600">156</p>
                      <p className="text-xs text-gray-500">Active Teachers</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">94.5%</p>
                      <p className="text-xs text-gray-500">Attendance</p>
                    </div>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="h-64 flex items-end justify-between gap-2 mt-8">
                  {enrollmentData.map((item, index) => (
                    <div key={index} className="w-full flex flex-col items-center group">
                      <div className="text-xs font-medium text-gray-700 mb-1 opacity-0 group-hover:opacity-100 transition">
                        {item.students}
                      </div>
                      <div 
                        className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg transition-all duration-500 group-hover:from-indigo-700 group-hover:to-purple-600"
                        style={{ 
                          height: `${(item.students / 900) * 200}px`,
                          maxHeight: '200px',
                          minHeight: '40px'
                        }}
                      ></div>
                      <div className="text-xs text-gray-600 mt-2 font-medium">
                        {item.month}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className={`w-full flex items-center justify-between p-4 rounded-xl text-white transition-all hover:shadow-lg ${action.color}`}
                    >
                      <span className="font-medium">{action.label}</span>
                      <action.icon size={20} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Activity Summary */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-sm text-gray-600">New student enrolled: <span className="font-medium text-gray-900">Emma Johnson</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-sm text-gray-600">Payment received: <span className="font-medium text-gray-900">$500 from Michael Chen</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <p className="text-sm text-gray-600">Assignment submitted: <span className="font-medium text-gray-900">Math 101 - 28 submissions</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <p className="text-sm text-gray-600">New teacher added: <span className="font-medium text-gray-900">Dr. Sarah Williams</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-4 px-6">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>© 2026 EduVerse. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Mail size={16} className="text-gray-400" />
              <span>admin@eduverse.com</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminDashboard;