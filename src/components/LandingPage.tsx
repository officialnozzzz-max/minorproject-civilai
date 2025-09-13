import React, { useState } from 'react';
import { GraduationCap, HardHat, Building2, Calculator, FileText, Users, User, UserPlus, X } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import { motion, AnimatePresence } from 'framer-motion';

interface LandingPageProps {
  onUserTypeSelect: (type: 'student' | 'engineer') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onUserTypeSelect }) => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonType, setComingSoonType] = useState<'login' | 'signup' | null>(null);

  const handleAuthClick = (type: 'login' | 'signup') => {
    setComingSoonType(type);
    setShowComingSoon(true);
  };

  const closeComingSoon = () => {
    setShowComingSoon(false);
    setComingSoonType(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-blue-300" />
              <h1 className="text-2xl font-bold text-white">Civil AI Minor Project</h1>
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <motion.button
                onClick={() => handleAuthClick('login')}
                className="flex items-center space-x-2 px-4 py-2 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </motion.button>
              <motion.button
                onClick={() => handleAuthClick('signup')}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors border border-blue-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeComingSoon}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-md mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">
                  {comingSoonType === 'login' ? 'Login' : 'Sign Up'}
                </h3>
                <button
                  onClick={closeComingSoon}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-blue-400/30">
                  {comingSoonType === 'login' ? (
                    <User className="h-8 w-8 text-blue-300" />
                  ) : (
                    <UserPlus className="h-8 w-8 text-blue-300" />
                  )}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">🚧 Coming Soon!</h4>
                <p className="text-blue-200 mb-6">
                  {comingSoonType === 'login' 
                    ? 'User authentication system is currently under development. Stay tuned for secure login capabilities!'
                    : 'User registration system is currently under development. Account creation will be available soon!'
                  }
                </p>
                <motion.button
                  onClick={closeComingSoon}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors border border-blue-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Got it!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Assistant for
            <span className="text-blue-300 block">Civil Engineering</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Get expert guidance, perform complex calculations, and access engineering resources 
            tailored for both students and professional engineers.
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Student Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border border-white/20 hover:scale-105 transform hover:bg-white/15">
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-green-400/30">
                <GraduationCap className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">For Students</h3>
              <p className="text-blue-100">
                Learning civil engineering concepts, solving homework problems, and preparing for exams
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Calculator className="h-5 w-5 text-green-300" />
                <span className="text-blue-100">Step-by-step problem solving</span>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-green-300" />
                <span className="text-blue-100">Concept explanations</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-green-300" />
                <span className="text-blue-100">Study guidance</span>
              </div>
            </div>

            <button
              onClick={() => onUserTypeSelect('student')}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-500 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 border border-green-500/50"
            >
              I'm a Student
            </button>
          </div>

          {/* Engineer Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border border-white/20 hover:scale-105 transform hover:bg-white/15">
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-blue-400/30">
                <HardHat className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">For Engineers</h3>
              <p className="text-blue-100">
                Professional engineering analysis, design verification, and technical consulting
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Building2 className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">Structural analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calculator className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">Design calculations</span>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">Code compliance</span>
              </div>
            </div>

            <button
              onClick={() => onUserTypeSelect('engineer')}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 border border-blue-500/50"
            >
              I'm an Engineer
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-white/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Powered by GPA NALANDA
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-400/30 transition-colors backdrop-blur-sm border border-purple-400/30">
                <Calculator className="h-6 w-6 text-purple-300" />
              </div>
              <h4 className="font-semibold text-white mb-2">Instant Calculations</h4>
              <p className="text-blue-100 text-sm">
                Complex engineering calculations solved in seconds
              </p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-orange-400/30 transition-colors backdrop-blur-sm border border-orange-400/30">
                <FileText className="h-6 w-6 text-orange-300" />
              </div>
              <h4 className="font-semibold text-white mb-2">Code References</h4>
              <p className="text-blue-100 text-sm">
                Access to building codes and engineering standards
              </p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-teal-400/30 transition-colors backdrop-blur-sm border border-teal-400/30">
                <Building2 className="h-6 w-6 text-teal-300" />
              </div>
              <h4 className="font-semibold text-white mb-2">Design Assistance</h4>
              <p className="text-blue-100 text-sm">
                Structural design guidance and optimization
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md text-white py-8 mt-16 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200">
            © 2025 Civil AI Minor Project. Empowering the next generation of civil engineers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
