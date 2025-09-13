import React, { useState } from 'react';
import { 
  ArrowLeft, 
  HardHat, 
  Building2, 
  Calculator, 
  FileBarChart,
  MessageCircle,
  Send,
  Settings,
  Database,
  Shield,
  User,
  UserPlus,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EngineerDashboardProps {
  onBackToHome: () => void;
}

const EngineerDashboard: React.FC<EngineerDashboardProps> = ({ onBackToHome }) => {
  const [message, setMessage] = useState('');
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonType, setComingSoonType] = useState<'login' | 'signup' | null>(null);
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'bot',
      content: 'Welcome! I\'m your professional AI assistant for civil engineering. I can help with structural analysis, design calculations, code compliance, and technical consulting.'
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, 
        { type: 'user', content: message },
        { type: 'bot', content: '🚧 Coming Soon! Professional AI consulting features are currently under development. Advanced engineering capabilities will be available soon!' }
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

  const professionalTools = [
    { icon: Building2, title: 'Structural Analysis', desc: 'Advanced structural calculations and modeling' },
    { icon: Calculator, title: 'Design Verification', desc: 'Code compliance and safety factor verification' },
    { icon: FileBarChart, title: 'Load Calculations', desc: 'Wind, seismic, and dead/live load analysis' },
    { icon: Database, title: 'Material Database', desc: 'Steel, concrete, and composite properties' },
    { icon: Shield, title: 'Safety Assessment', desc: 'Risk analysis and safety evaluations' },
    { icon: Settings, title: 'Project Management', desc: 'Technical project coordination tools' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-900 to-black relative overflow-hidden">
      {/* Animated background elements for engineer dashboard */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 bg-blue-400/20 rounded-lg backdrop-blur-sm border border-blue-400/30"
          animate={{
            rotate: [0, 90, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-16 h-16 bg-indigo-400/20 rounded-full backdrop-blur-sm border border-indigo-400/30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-8 h-20 bg-blue-300/20 rounded-full backdrop-blur-sm border border-blue-300/30"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 0],
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
                <HardHat className="h-8 w-8 text-blue-300" />
                <div>
                  <h1 className="text-xl font-bold text-white">Professional Dashboard</h1>
                  <p className="text-sm text-blue-200">Civil Engineering AI Consultant</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.span 
                className="px-3 py-1 bg-blue-500/20 text-blue-200 text-sm font-medium rounded-full backdrop-blur-sm border border-blue-400/30"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Professional Mode
              </motion.span>
              
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
                  className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors border border-blue-500/50 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Sign Up</span>
                </motion.button>
              </div>
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
                  {comingSoonType === 'login' ? 'Professional Login' : 'Professional Sign Up'}
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
                    ? 'Professional engineer authentication is currently under development. Secure access to advanced tools coming soon!'
                    : 'Professional engineer registration is currently under development. Create verified professional accounts soon!'
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Professional Tools */}
          <div className="lg:col-span-1">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 mb-6 border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-semibold text-white mb-4">Professional Tools</h2>
              <div className="grid grid-cols-1 gap-3">
                {professionalTools.map((tool, index) => (
                  <motion.button
                    key={index}
                    className="text-left p-3 rounded-lg border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/10 transition-colors backdrop-blur-sm"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-3">
                      <tool.icon className="h-5 w-5 text-blue-300 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-white text-sm">{tool.title}</h3>
                        <p className="text-xs text-blue-200">{tool.desc}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-lg font-semibold text-white mb-4">Project Overview</h2>
              <div className="space-y-4">
                <motion.div 
                  className="flex justify-between items-center"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-blue-200">Active Projects</span>
                  <motion.span 
                    className="font-semibold text-white"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    12
                  </motion.span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-blue-200">Calculations Today</span>
                  <span className="font-semibold text-white">8</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-blue-200">Code Compliance</span>
                  <span className="font-semibold text-green-400">98%</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Professional Chat Interface */}
          <div className="lg:col-span-2">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg h-[600px] flex flex-col border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-blue-300" />
                  <h2 className="text-lg font-semibold text-white">AI Engineering Consultant</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.span 
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-sm text-blue-200">Professional Mode Active</span>
                </div>
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
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      chat.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white/20 text-white border border-white/30 backdrop-blur-sm'
                    }`}>
                      {chat.content}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Professional Message Input */}
              <div className="p-4 border-t border-white/20 bg-black/20">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your engineering challenge or calculation needs..."
                    className="flex-1 border border-white/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-blue-200"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <motion.button
                    onClick={handleSendMessage}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors font-medium border border-blue-500/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="h-5 w-5" />
                  </motion.button>
                </div>
                <p className="text-xs text-blue-300 mt-2">
                  Professional mode provides detailed technical analysis and code-compliant solutions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineerDashboard;
