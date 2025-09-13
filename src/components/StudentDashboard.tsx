import React, { useState } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Calculator, 
  FileText, 
  MessageCircle,
  Send,
  Lightbulb,
  Target,
  Clock,
  User,
  UserPlus,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StudentDashboardProps {
  onBackToHome: () => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ onBackToHome }) => {
  const [message, setMessage] = useState('');
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonType, setComingSoonType] = useState<'login' | 'signup' | null>(null);
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m your AI assistant for civil engineering studies. How can I help you today?'
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, 
        { type: 'user', content: message },
        { type: 'bot', content: '🚧 Coming Soon! AI chat functionality is currently under development. Stay tuned for exciting updates!' }
      ]);
      setMessage('');
    }
  };

  const handleAuthClick = (type: 'login' | 'signup') => {
    setComingSoonType(type);
    setShowComingSoon(true);
  };

  const closeComingSoon = () => {
    setShowComingSoon(false);
    setComingSoonType(null);
  };

  const quickActions = [
    { icon: Calculator, title: 'Structural Calculations', desc: 'Solve beam, column, and foundation problems' },
    { icon: FileText, title: 'Code Questions', desc: 'Building codes and design standards' },
    { icon: Lightbulb, title: 'Concept Help', desc: 'Understand engineering principles' },
    { icon: Target, title: 'Exam Prep', desc: 'Practice problems and study guides' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-900 to-black relative overflow-hidden">
      {/* Animated background elements for dashboard */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-16 h-16 bg-green-400/20 rounded-lg backdrop-blur-sm border border-green-400/30"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-12 h-12 bg-blue-400/20 rounded-full backdrop-blur-sm border border-blue-400/30"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={onBackToHome}
                className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </motion.button>
              <div className="flex items-center space-x-3">
                <BookOpen className="h-8 w-8 text-green-400" />
                <div>
                  <h1 className="text-xl font-bold text-white">Student Dashboard</h1>
                  <p className="text-sm text-blue-200">Civil Engineering AI Assistant</p>
                </div>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <motion.button
                onClick={() => handleAuthClick('login')}
                className="flex items-center space-x-2 px-3 py-2 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors backdrop-blur-sm text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </motion.button>
              <motion.button
                onClick={() => handleAuthClick('signup')}
                className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors border border-green-500/50 text-sm"
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
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-green-400/30">
                  {comingSoonType === 'login' ? (
                    <User className="h-8 w-8 text-green-300" />
                  ) : (
                    <UserPlus className="h-8 w-8 text-green-300" />
                  )}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">🚧 Coming Soon!</h4>
                <p className="text-blue-200 mb-6">
                  {comingSoonType === 'login' 
                    ? 'Student login system is currently under development. Save your progress and access personalized content soon!'
                    : 'Student registration is currently under development. Create your account to track learning progress!'
                  }
                </p>
                <motion.button
                  onClick={closeComingSoon}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors border border-green-500/50"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 mb-6 border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={index}
                    className="w-full text-left p-3 rounded-lg border border-white/20 hover:border-green-400/50 hover:bg-green-500/10 transition-colors backdrop-blur-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-3">
                      <action.icon className="h-5 w-5 text-green-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-white">{action.title}</h3>
                        <p className="text-sm text-blue-200">{action.desc}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Recent Topics */}
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-lg font-semibold text-white mb-4">Recent Topics</h2>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5"
                  whileHover={{ x: 5 }}
                >
                  <Clock className="h-4 w-4 text-blue-300" />
                  <span className="text-sm text-blue-100">Beam deflection calculations</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5"
                  whileHover={{ x: 5 }}
                >
                  <Clock className="h-4 w-4 text-blue-300" />
                  <span className="text-sm text-blue-100">Concrete mix design</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5"
                  whileHover={{ x: 5 }}
                >
                  <Clock className="h-4 w-4 text-blue-300" />
                  <span className="text-sm text-blue-100">Steel connection design</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg h-[600px] flex flex-col border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center space-x-3 p-4 border-b border-white/20">
                <MessageCircle className="h-6 w-6 text-green-400" />
                <h2 className="text-lg font-semibold text-white">AI Assistant</h2>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatHistory.map((chat, index) => (
                  <motion.div 
                    key={index} 
                    className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      chat.type === 'user' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-white/20 text-white backdrop-blur-sm border border-white/30'
                    }`}>
                      {chat.content}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-white/20">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask me anything about civil engineering..."
                    className="flex-1 border border-white/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-blue-200"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <motion.button
                    onClick={handleSendMessage}
                    className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-500 transition-colors border border-green-500/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
