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
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Clock,
  Award,
  UserPlus,
  PlusCircle
} from 'lucide-react';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data for stats - with colors matching the design
  const stats = [
    { 
      title: 'Total Students', 
      value: '2,847', 
      change: '+12.5%', 
      icon: Users, 
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    { 
      title: 'Total Revenue', 
      value: '#48,574', 
      change: '+8.2%', 
      icon: DollarSign, 
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-50',
      textColor: 'text-green-600'
    },
    { 
      title: 'Active Subjects', 
      value: '156', 
      change: '+3.1%', 
      icon: BookOpen, 
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    { 
      title: 'Attendance Rate', 
      value: '94.5%', 
      change: '+2.3%', 
      icon: CheckCircle, 
      color: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
  ];

  // Mock data for enrollment trends
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
    { month: 'Dec', students: 635 },
  ];

  // Mock data for recent activity
  const recentActivities = [
    {
      id: 1,
      student: 'Emma Johnson',
      action: 'Submitted assignment',
      course: 'Mathematics 101',
      time: '5 minutes ago',
      status: 'completed',
      statusColor: 'bg-green-100 text-green-700',
      icon: '📝'
    },
    {
      id: 2,
      student: 'Michael Chen',
      action: 'Enrolled in course',
      course: 'Physics Advanced',
      time: '15 minutes ago',
      status: 'new',
      statusColor: 'bg-blue-100 text-blue-700',
      icon: '🎓'
    },
    {
      id: 3,
      student: 'Sarah Williams',
      action: 'Payment received',
      course: 'Annual Tuition Fee',
      time: '1 hour ago',
      status: 'completed',
      statusColor: 'bg-green-100 text-green-700',
      icon: '💰'
    },
    {
      id: 4,
      student: 'David Martinez',
      action: 'Attendance marked',
      course: 'Chemistry Lab',
      time: '2 hours ago',
      status: 'completed',
      statusColor: 'bg-green-100 text-green-700',
      icon: '📅'
    },
    {
      id: 5,
      student: 'Lisa Anderson',
      action: 'Grade updated',
      course: 'English Literature',
      time: '3 hours ago',
      status: 'updated',
      statusColor: 'bg-purple-100 text-purple-700',
      icon: '📊'
    },
    {
      id: 6,
      student: 'James Taylor',
      action: 'Submitted assignment',
      course: 'Computer Science',
      time: '4 hours ago',
      status: 'completed',
      statusColor: 'bg-green-100 text-green-700',
      icon: '💻'
    },
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
    { label: 'Add New Student', icon: UserPlus, color: 'bg-blue-600 hover:bg-blue-700' },
    { label: 'Create Course', icon: PlusCircle, color: 'bg-purple-600 hover:bg-purple-700' },
    { label: 'Record Payment', icon: DollarSign, color: 'bg-green-600 hover:bg-green-700' },
    { label: 'Generate Report', icon: FileText, color: 'bg-orange-600 hover:bg-orange-700' },
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
              A
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">Admin User</p>
              <p className="text-xs text-indigo-300">Administrator</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-indigo-800 rounded-lg transition">
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-indigo-800 rounded-lg transition mt-1">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-20">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={24} />
            </button>

            <h1 className="text-xl font-bold text-gray-800 hidden lg:block">Dashboard</h1>

            <div className="flex items-center gap-4 ml-auto">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <MessageSquare size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
              </button>
              <div className="h-8 w-px bg-gray-200 mx-2"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <span className="text-sm font-medium hidden sm:block">Admin</span>
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

          {/* Stats Grid - Updated colors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white`}>
                    <stat.icon size={24} />
                  </div>
                  <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Enrollment Trends */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
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

                {/* Bar Chart - Updated colors */}
                <div className="h-64 flex items-end justify-between gap-2 mt-8">
                  {enrollmentData.map((item, index) => (
                    <div key={index} className="w-full flex flex-col items-center group">
                      <div className="text-xs font-medium text-gray-700 mb-1 opacity-0 group-hover:opacity-100 transition">
                        {item.students}
                      </div>
                      <div className="w-full bg-indigo-100 rounded-lg overflow-hidden">
                        <div 
                          className="bg-gradient-to-t from-indigo-600 to-indigo-400 transition-all duration-500 group-hover:from-indigo-700 group-hover:to-purple-600"
                          style={{ 
                            height: `${(item.students / 900) * 200}px`,
                            maxHeight: '200px',
                            minHeight: '30px'
                          }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-600 mt-2 font-medium">
                        {item.month}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity Table */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 text-sm font-semibold text-gray-600">STUDENT</th>
                        <th className="text-left py-3 text-sm font-semibold text-gray-600">ACTION</th>
                        <th className="text-left py-3 text-sm font-semibold text-gray-600">COURSE</th>
                        <th className="text-left py-3 text-sm font-semibold text-gray-600">TIME</th>
                        <th className="text-left py-3 text-sm font-semibold text-gray-600">STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentActivities.map((activity) => (
                        <tr key={activity.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                                {activity.icon}
                              </div>
                              <span className="font-medium text-gray-900">{activity.student}</span>
                            </div>
                          </td>
                          <td className="py-4 text-gray-600">{activity.action}</td>
                          <td className="py-4 text-gray-600">{activity.course}</td>
                          <td className="py-4 text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock size={14} className="text-gray-400" />
                              <span>{activity.time}</span>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className={`px-2 py-1 text-xs rounded-full ${activity.statusColor}`}>
                              {activity.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
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

              {/* Upcoming Events - Updated colors */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                      15
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Parent-Teacher Meeting</p>
                      <p className="text-sm text-gray-600">4:00 PM • 124 attending</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-xl">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      20
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Sports Day</p>
                      <p className="text-sm text-gray-600">9:00 AM • 500+ attending</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                      25
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Quarterly Exams</p>
                      <p className="text-sm text-gray-600">8:00 AM • All students</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Performers */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Top Performers</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                        🥇
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Emma Johnson</p>
                        <p className="text-xs text-gray-600">Grade 12 • 98%</p>
                      </div>
                    </div>
                    <Award size={20} className="text-yellow-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                        🥈
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Michael Chen</p>
                        <p className="text-xs text-gray-600">Grade 11 • 96%</p>
                      </div>
                    </div>
                    <Award size={20} className="text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                        🥉
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Sarah Williams</p>
                        <p className="text-xs text-gray-600">Grade 10 • 94%</p>
                      </div>
                    </div>
                    <Award size={20} className="text-orange-500" />
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
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>admin@eduverse.com</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminDashboard;