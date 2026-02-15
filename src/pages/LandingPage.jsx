import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-on-scroll {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          animation: slideInUp 0.8s ease-out forwards;
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .gradient-border {
          position: relative;
          border-radius: 1rem;
          background: linear-gradient(60deg, #6366F1, #8B5CF6, #EC4899);
          background-size: 200% 200%;
          animation: animated-gradient 8s ease infinite;
        }
        @keyframes animated-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl transform transition-transform group-hover:rotate-12 duration-300 shadow-lg">
                S
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                SRMS
              </span>
              <span className="hidden md:block text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full ml-2">
                Built for principals, by educators
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              {["Features", "Benefits", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-indigo-600 font-medium hidden sm:block transition-colors"
              >
                Login
              </Link>
              <Link to="/login">
                <button className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative px-6 py-2.5 bg-white rounded-lg font-semibold text-indigo-600 hover:text-white transition-colors duration-300 group-hover:bg-transparent">
                    Get Started
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION - Less time on paperwork */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div 
                className="inline-block px-5 py-2.5 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 text-indigo-700 rounded-full text-sm font-semibold mb-6 border border-indigo-200/50"
                style={{ animation: "slideInLeft 0.8s ease-out" }}
              >
                ✨ BUILT FOR PRINCIPALS, BY EDUCATORS
              </div>
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                style={{ animation: "slideInLeft 0.8s ease-out 0.2s both" }}
              >
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Less time on paperwork.
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  More time with students.
                </span>
              </h1>
              <p 
                className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl lg:mx-0 mx-auto leading-relaxed"
                style={{ animation: "slideInLeft 0.8s ease-out 0.4s both" }}
              >
                Your morning attendance done by <span className="text-indigo-600 font-semibold">8:15 AM</span>. Every day. 
                No more spreadsheets, lost permission slips, or stacks of paper.
              </p>
              
              {/* Stats that matter to schools */}
              <div 
                className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8"
                style={{ animation: "slideInLeft 0.8s ease-out 0.6s both" }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-indigo-600">15 min</div>
                  <div className="text-sm text-gray-600">Average setup time</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-indigo-600">1,200+</div>
                  <div className="text-sm text-gray-600">Report cards/hour</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-indigo-600">98%</div>
                  <div className="text-sm text-gray-600">Parents reached in 60s</div>
                </div>
              </div>

              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                style={{ animation: "slideInLeft 0.8s ease-out 0.8s both" }}
              >
                <Link to="/login">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-2">
                      Start Free Trial 
                      <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </button>
                </Link>
                <Link to="/login">
                  <button className="group px-8 py-4 bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg">
                    <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full text-white group-hover:scale-110 transition-transform">
                      ▶
                    </span>
                    See it in action — 15 min demo
                  </button>
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                No sales pitch. Just your school, your data, and 15 minutes.
              </p>
            </div>

            {/* Right visual - Your school dashboard */}
            <div 
              className="flex-1 relative animate-float"
              style={{ animation: "slideInRight 0.8s ease-out 0.4s both" }}
            >
              <div className="gradient-border p-1">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Your School • Ready for tomorrow</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: "👥", label: "Students enrolled", value: "842", color: "from-blue-500 to-indigo-600" },
                      { icon: "📅", label: "Present today", value: "96%", color: "from-green-500 to-teal-600" },
                      { icon: "👩‍🏫", label: "Staff", value: "48", color: "from-purple-500 to-pink-600" },
                      { icon: "💬", label: "Parent messages", value: "12 new", color: "from-orange-500 to-red-600" }
                    ].map((item, idx) => (
                      <div 
                        key={idx}
                        className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-3 text-2xl shadow-lg`}>
                          {item.icon}
                        </div>
                        <div className="font-bold text-2xl text-gray-900">{item.value}</div>
                        <div className="text-sm text-gray-600">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center gap-2 text-sm bg-indigo-50 p-3 rounded-xl">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span>Attendance taken at 8:12 AM today. 32 parents notified.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* PROBLEM AGITATION - Right now, your school is probably running on... */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 animate-on-scroll">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                ⚠️ HONEST QUESTION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Right now, your school is probably running on...
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl">📊</span>
                <span className="font-medium text-gray-800">A spreadsheet for attendance</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl">📝</span>
                <span className="font-medium text-gray-800">Another spreadsheet for grades</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl">📁</span>
                <span className="font-medium text-gray-800">Permission slips on someone's desk</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl">📧</span>
                <span className="font-medium text-gray-800">Emails that get lost</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl">💰</span>
                <span className="font-medium text-gray-800">Cash in envelopes for lunch</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl">📠</span>
                <span className="font-medium text-gray-800">A photocopier that never stops</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl">📋</span>
                <span className="font-medium text-gray-800">Sticky notes everywhere</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl">😩</span>
                <span className="font-medium text-gray-800">Your secretary's last nerve</span>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-xl text-gray-700 italic">
                It works. But it shouldn't be this hard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHTS - The stuff you do every day. Just easier. */}
      <section ref={featuresRef} className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 text-indigo-700 rounded-full text-sm font-semibold mb-4 border border-indigo-200/50">
              🎯 NO MORE STICKY NOTES, SPREADSHEETS, AND LOST PERMISSION SLIPS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                The stuff you do every day.
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Just easier.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: "👥", 
                title: "Student Information", 
                desc: "Emergency contacts, allergies, IEPs, and last year's teacher — all in one click.",
                color: "from-blue-500 to-indigo-600",
                stats: "⏱️ Saves 4 hours per report card cycle"
              },
              { 
                icon: "📅", 
                title: "Morning Attendance", 
                desc: "Take attendance on your phone during morning meeting. Parents know before recess if their child is marked absent.",
                color: "from-green-500 to-teal-600",
                stats: "📱 60 seconds • 100% notified"
              },
              { 
                icon: "📝", 
                title: "Gradebook", 
                desc: "Enter grades once. Report cards, transcripts, and parent conferences — pre-filled.",
                color: "from-purple-500 to-pink-600",
                stats: "✏️ No more manual averaging"
              },
              { 
                icon: "💬", 
                title: "School Communication", 
                desc: "Field trip permission? School closed? Lost jacket? One message reaches every parent.",
                color: "from-orange-500 to-red-600",
                stats: "📨 95% open rate • No more paper flyers"
              },
              { 
                icon: "💰", 
                title: "Fee Collection", 
                desc: "Lunch money, field trips, yearbooks — collect it all without handling cash.",
                color: "from-pink-500 to-rose-600",
                stats: "💳 90% of parents pay within 24 hours"
              },
              { 
                icon: "👪", 
                title: "Parent Portal", 
                desc: "One login. Your kid's entire school day — grades, attendance, announcements.",
                color: "from-cyan-500 to-blue-600",
                stats: "📱 Used daily by 8 out of 10 parents"
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group animate-on-scroll hover-lift bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-5 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMART ANALYTICS - Know what's happening without walking into every classroom */}
      <section className="py-28 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 animate-on-scroll">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 text-indigo-700 rounded-full text-sm font-semibold mb-4 border border-indigo-200/50">
                📈 KNOW YOUR STUDENTS BETTER
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Know what's happening in every classroom —
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  without walking into every classroom.
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Which kids haven't turned in three assignments? Which classes are always late from lunch? 
                You'll know before it's a problem.
              </p>
              
              <div className="space-y-5">
                {[
                  "See which students are falling behind — 6 weeks before they fail",
                  "Attendance patterns by day of week (Tuesday is always low)",
                  "Honor roll? One click. No calculator needed.",
                  "Teacher evaluations stay in the office. This is about kids."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm shadow-lg group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 animate-on-scroll">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse-glow"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-semibold text-lg">Your School at a Glance</span>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full">
                      Today's Update
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-indigo-50 p-4 rounded-xl">
                      <div className="text-sm text-gray-600">Present Today</div>
                      <div className="text-3xl font-bold text-indigo-700">804</div>
                      <div className="text-xs text-green-600">↑ 2% from yesterday</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <div className="text-sm text-gray-600">Missing assignments</div>
                      <div className="text-3xl font-bold text-purple-700">43</div>
                      <div className="text-xs text-amber-600">↓ 12 from Monday</div>
                    </div>
                  </div>

                  {/* Attendance This Week - CORRECTLY LABELED */}
                  <div className="bg-gray-50 p-5 rounded-xl">
                    <div className="text-sm font-medium text-gray-700 mb-4 flex justify-between">
                      <span>Attendance This Week</span>
                      <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded-full">
                        ↑ 2.3% vs last week
                      </span>
                    </div>
                    <div className="h-24 w-full flex items-end justify-between gap-3">
                      {[
                        { day: 'Mon', value: 92 },
                        { day: 'Tue', value: 94 },
                        { day: 'Wed', value: 89 },
                        { day: 'Thu', value: 96 },
                        { day: 'Fri', value: 93 }
                      ].map((item) => (
                        <div key={item.day} className="w-full flex flex-col items-center group">
                          <div className="text-xs font-medium text-gray-700 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.value}%
                          </div>
                          <div className="w-full bg-indigo-100 rounded-lg h-16 flex items-end justify-center overflow-hidden">
                            <div 
                              className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-lg transition-all duration-500 ease-out group-hover:from-indigo-700 group-hover:to-purple-600"
                              style={{ height: `${item.value}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-600 mt-2 font-medium">
                            {item.day}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-gray-500 border-t border-gray-200 pt-3">
                      <span className="flex items-center gap-1">✅ 92% yesterday</span>
                      <span className="flex items-center gap-1">📊 Weekly avg: 92.8%</span>
                      <span className="flex items-center gap-1">⚠️ Wednesday needs attention</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Real school voices */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 text-indigo-700 rounded-full text-sm font-semibold mb-4 border border-indigo-200/50">
              💬 FROM SCHOOLS LIKE YOURS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Not 500 schools.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Just happy principals.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I stopped printing attendance sheets. I stopped photocopying report cards. I just… stopped.",
                author: "Dr. Sarah Johnson",
                role: "Principal, Springfield Elementary",
                initial: "S"
              },
              {
                quote: "Our secretary used to spend 3 hours every Friday emailing report cards. Now she leaves at 3:30.",
                author: "Michael Chen",
                role: "Head of School, International Academy",
                initial: "M"
              },
              {
                quote: "A parent called me at 7:30 PM. She got the absence notification before I hung up my keys.",
                author: "Lisa Rodriguez",
                role: "Administrator, Lincoln K-8",
                initial: "L"
              }
            ].map((testimonial, idx) => (
              <div 
                key={idx}
                className="animate-on-scroll bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="text-5xl mb-4 text-indigo-600">"</div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Let's get your school set up this week */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's get your school set up this week.
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              No implementation team. No 6-month rollout. Just you, your data, and 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <button className="group px-10 py-5 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  📅 See it in action — 15 min demo
                </button>
              </Link>
              <Link to="/login">
                <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                  Start free trial
                </button>
              </Link>
            </div>
            <p className="text-white/80 mt-6 text-sm">
              No credit card required • 14-day trial • Real school. Real data. No sales pitch.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER - Software for schools that don't act like districts */}
      <footer className="bg-gray-900 text-gray-300 pt-20 pb-8 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  S
                </div>
                <span className="font-bold text-2xl text-white">SRMS</span>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Software for schools that don't act like districts.
              </p>
              <div className="flex space-x-4">
                <span className="text-gray-400 text-sm">📧 principals@srms.com</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Product</h4>
              <ul className="space-y-3">
                {["Features", "Pricing", "Security", "Support"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Resources</h4>
              <ul className="space-y-3">
                {["Help Center", "Blog", "Contact", "Privacy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Get in Touch</h4>
              <p className="text-gray-400 mb-4">Questions? Talk to a human.</p>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
                Call us. A human answers.
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2026 SRMS. Built for one school at a time.</p>
            <div className="flex space-x-8 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;