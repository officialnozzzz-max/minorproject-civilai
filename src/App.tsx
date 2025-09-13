import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import StudentDashboard from './components/StudentDashboard';
import EngineerDashboard from './components/EngineerDashboard';

type UserType = 'student' | 'engineer' | null;

function App() {
  const [userType, setUserType] = useState<UserType>(null);

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
  };

  const handleBackToHome = () => {
    setUserType(null);
  };

  if (userType === 'student') {
    return <StudentDashboard onBackToHome={handleBackToHome} />;
  }

  if (userType === 'engineer') {
    return <EngineerDashboard onBackToHome={handleBackToHome} />;
  }

  return <LandingPage onUserTypeSelect={handleUserTypeSelect} />;
}

export default App;
