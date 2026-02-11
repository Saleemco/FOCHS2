import React, { useEffect, useRef, useState } from "react";

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
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Animation on scroll observer
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
      {/* Custom CSS for animations */}
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
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
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
        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
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
          background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
          background-size: 300% 300%;
          animation: animated-gradient 12s ease infinite;
        }
        @keyframes animated-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: inherit;
          border-radius: inherit;
          z-index: -1;
          filter: blur(15px);
          opacity: 0.5;
        }
      `}</style>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Header / Navigation with scroll effect */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo with animation */}
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl transform transition-transform group-hover:rotate-12 duration-300 shadow-lg">
                <Fieldset:d>S</Fieldset:d>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                SRMS
              </span>
            </div>

            {/* Nav Links */}
            <nav className="hidden md:flex space-x-8">
              {["Features", "Benefits", "About", "For Schools"].map((item) => (
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

            {/* Right actions */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium hidden sm:block transition-colors">
                Login
              </a>
              <button className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-6 py-2.5 bg-white rounded-lg font-semibold text-indigo-600 hover:text-white transition-colors duration-300 group-hover:bg-transparent">
                  Get Started
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION - More dynamic and engaging */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left column with sequential animations */}
            <div className="flex-1 text-center lg:text-left">
              <div 
                className="inline-block px-5 py-2.5 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 text-indigo-700 rounded-full text-sm font-semibold mb-6 border border-indigo-200/50"
                style={{ animation: "slideInLeft 0.8s ease-out" }}
              >
                ✨ MODERN EDUCATION PLATFORM
              </div>
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                style={{ animation: "slideInLeft 0.8s ease-out 0.2s both" }}
              >
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                Your School
                <br />
                <span className="relative">
                  Management
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M0 0L300 12" stroke="url(#gradient)" strokeWidth="4"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366F1"/>
                        <stop offset="100%" stopColor="#A855F7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              <p 
                className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl lg:mx-0 mx-auto leading-relaxed"
                style={{ animation: "slideInLeft 0.8s ease-out 0.4s both" }}
              >
                Streamline operations, enhance communication, and empower educators with our <span className="text-indigo-600 font-semibold">all-in-one</span> school management solution.
              </p>
              
              {/* Stats counter */}
              <div 
                className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8"
                style={{ animation: "slideInLeft 0.8s ease-out 0.6s both" }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-indigo-600">500+</div>
                  <div className="text-sm text-gray-600">Schools</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-indigo-600">50k+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-indigo-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>

              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                style={{ animation: "slideInLeft 0.8s ease-out 0.8s both" }}
              >
                <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Free Trial 
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group px-8 py-4 bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg">
                  <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full text-white group-hover:scale-110 transition-transform">
                    ▶
                  </span>
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right visual - Enhanced with 3D effect */}
            <div 
              className="flex-1 relative animate-float"
              style={{ animation: "slideInRight 0.8s ease-out 0.4s both" }}
            >
              <div className="gradient-border p-1">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: "👥", label: "Students", value: "2.5k+", color: "from-blue-500 to-indigo-600" },
                      { icon: "📅", label: "Attendance", value: "98%", color: "from-green-500 to-teal-600" },
                      { icon: "📊", label: "Analytics", value: "Real-time", color: "from-purple-500 to-pink-600" },
                      { icon: "💬", label: "Communication", value: "Instant", color: "from-orange-500 to-red-600" }
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
                  
                  {/* Live activity indicator */}
                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span>250+ active users right now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-sm uppercase tracking-wider mb-8">Trusted by leading educational institutions</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            {["Harvard", "Stanford", "MIT", "Oxford", "Cambridge"].map((school) => (
              <div key={school} className="text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {school}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHTS - With staggered animations */}
      <section ref={featuresRef} className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 text-indigo-700 rounded-full text-sm font-semibold mb-4 border border-indigo-200/50">
              🚀 POWERFUL FEATURES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Everything You Need
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                In One Platform
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed to simplify school administration, enhance learning outcomes, and foster better communication
            </p>
          </div>

          {/* Feature cards with hover effects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: "👥", 
                title: "Student Information System", 
                desc: "Centralized database for student records, enrollment history, and academic progress tracking.",
                color: "from-blue-500 to-indigo-600",
                stats: "50% less paperwork"
              },
              { 
                icon: "📅", 
                title: "Smart Attendance", 
                desc: "Biometric & QR code integration with automated parent notifications and daily reports.",
                color: "from-green-500 to-teal-600",
                stats: "98% accuracy"
              },
              { 
                icon: "📊", 
                title: "Predictive Analytics", 
                desc: "AI-powered insights to identify at-risk students and improve learning outcomes.",
                color: "from-purple-500 to-pink-600",
                stats: "Early intervention"
              },
              { 
                icon: "🎓", 
                title: "Grade Management", 
                desc: "Customizable grading scales, automated report cards, and parent portal access.",
                color: "from-orange-500 to-red-600",
                stats: "Instant results"
              },
              { 
                icon: "💬", 
                title: "Communication Hub", 
                desc: "Two-way messaging, announcements, and video conferencing integration.",
                color: "from-pink-500 to-rose-600",
                stats: "100% engagement"
              },
              { 
                icon: "💰", 
                title: "Fee Management", 
                desc: "Automated fee collection, payment reminders, and financial reporting.",
                color: "from-cyan-500 to-blue-600",
                stats: "90% faster collection"
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

      {/* Smart Analytics Dashboard - Enhanced */}
      <section className="py-28 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 animate-on-scroll">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 text-indigo-700 rounded-full text-sm font-semibold mb-4 border border-indigo-200/50">
                🔥 REAL-TIME INSIGHTS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Smart Analytics
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Dashboard
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get real-time insights into student performance, attendance trends, and institutional metrics with our powerful AI-driven analytics engine.
              </p>
              
              {/* Feature list with checkmarks */}
              <div className="space-y-5">
                {[
                  "Identify at-risk students 3 months in advance",
                  "Reduce dropout rates by up to 40%",
                  "Personalized learning recommendations",
                  "Automated parent-teacher conference scheduling"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm shadow-lg group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-10 group inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all">
                Explore all analytics features
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* Enhanced dashboard mockup */}
            <div className="flex-1 animate-on-scroll">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse-glow"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-semibold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Performance Overview
                      </span>
                      <span className="flex items-center gap-2 text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Live Data
                      </span>
                    </div>
                    
                    {/* Animated bar chart */}
                    <div className="h-56 w-full flex items-end justify-between gap-2 mb-6">
                      {[75, 92, 88, 96, 82, 79, 95].map((height, i) => (
                        <div key={i} className="relative group w-full">
                          <div 
                            className="bg-gradient-to-t from-indigo-600 to-purple-600 rounded-t-lg w-full transition-all duration-1000 ease-out"
                            style={{ 
                              height: `${height}%`,
                              animation: `slideInUp 0.5s ease-out ${i * 0.1}s both`
                            }}
                          >
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {height}% performance
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Avg. Grade", value: "86%", change: "+5.2%" },
                        { label: "Attendance", value: "94%", change: "+2.1%" },
                        { label: "Enrolled", value: "1,284", change: "+124" }
                      ].map((stat, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                          <div className="text-xs text-gray-500">{stat.label}</div>
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-xs text-green-600 font-semibold">{stat.change}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 text-indigo-700 rounded-full text-sm font-semibold mb-4 border border-indigo-200/50">
              💬 TRUSTED BY EDUCATORS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What School Leaders Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of schools already transforming their management experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "FOCHS reduced our administrative workload by 60%. Now teachers can focus on what really matters - teaching.",
                author: "Dr. Sarah Johnson",
                role: "Principal, Springfield High",
                rating: 5
              },
              {
                quote: "The analytics dashboard helped us identify struggling students early. Our pass rate increased by 35% in one year.",
                author: "Michael Chen",
                role: "Academic Director, International School",
                rating: 5
              },
              {
                quote: "Parent engagement went from 40% to 95% after implementing the communication hub. Absolutely transformative.",
                author: "Lisa Rodriguez",
                role: "PTA President, Lincoln Academy",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div 
                key={idx}
                className="animate-on-scroll bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="text-5xl mb-4 text-indigo-600">"</div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-grid-white/10 bg-grid opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Join 500+ schools already using EduVerse to streamline operations and improve student outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-10 py-5 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Start Your Free Trial
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
            <p className="text-white/80 mt-6 text-sm">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced FOOTER */}
      <footer className="bg-gray-900 text-gray-300 pt-20 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-grid opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl transform transition-transform group-hover:rotate-12">
                  S
                </div>
                <span className="font-bold text-2xl text-white">SRMS</span>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Empowering education through innovative technology solutions that bring schools, teachers, and parents together.
              </p>
              <div className="flex space-x-5">
                {["in", "🐦", "📷", "🔍"].map((social, idx) => (
                  <a 
                    key={idx}
                    href="#" 
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white hover:scale-110 transition-all duration-300 text-xl"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Product</h4>
              <ul className="space-y-3">
                {["Features", "Pricing", "Security", "Integrations", "Updates"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Resources</h4>
              <ul className="space-y-3">
                {["Documentation", "Help Center", "Blog", "Community", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stay Updated */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Stay Updated</h4>
              <p className="text-gray-400 mb-4">Get the latest news and updates delivered to your inbox</p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 FOCHS. All rights reserved.</p>
            <div className="flex space-x-8 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;