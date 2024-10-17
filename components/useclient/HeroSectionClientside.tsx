"use client"
import React, { useState } from 'react';
import AuthFlow from '@/components/Auth/AuthFlow';
const HeroSectionClientside: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  return (
    <div>
      <AuthFlow isLoginMode={isLoginMode} />
      <p className="text-md text-slate-700 mx-4 sm:mx-8 md:mx-12 lg:mx-20">
        {isLoginMode ? "Already have a goal to achieve?" : "Ready to achieve your goal?"}{' '}
        <span 
          onClick={() => setIsLoginMode(!isLoginMode)} 
          className="text-slate-950 cursor-pointer font-medium"
        >
          {isLoginMode ? "Login" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default HeroSectionClientside;
