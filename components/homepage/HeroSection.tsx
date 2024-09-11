
import React from 'react';

import GoalSection from './GoalSection';
import FindMyLevelTest from './FindMyLevelTest';
import PerformanceInsightsLayout from './Performance';
import MasterYourSyllabus from './MasterYourSyllabus';
import SuccessOddsAnalyzer from './SuccessOdeer';
import AppCta from './AppCta';
import Footer from './Footer';
import Image from 'next/image';
import illustrationImage from '@/public/assets/img/Group 1198.svg'
import HeroSectionClientsid from '@/app/useclient/HeroSectionClientside.tsx';

const HeroSection: React.FC = () => {
  return (
    <div>   
      <div className="w-full max-w-10xl mx-auto  px-4 sm:px-6 lg:px-8">   
      <div className="min-h-[500px] rounded-lg p-6 sm:p-8 bg-slate-200 flex flex-col md:flex-row items-center mb-20">
        <div className="w-full md:w-1/2 space-y-6 pr-0 md:pr-8">
          <div className="space-y-3 ">
            <p className="text-md sm:text-lg text-slate-700">Practice Makes a Person Perfect. Agree?</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-slate-700 ">
              Our <span className="text-slate-900 font-semibold">Progressive Practice Test</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-700 ">
              help you to <span className="text-slate-900 font-semibold">rank in top 1%</span>
            </h2>
            <p className="text-sm text-slate-700">Trusted by Toppers to Practice, improve and succeed.</p>
          </div>
    <HeroSectionClientsid/>
        
        </div> 
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full h-[340px] sm:h-[440px]"> 
          
  <Image
    src={illustrationImage}
    alt="Progressive Practice Test Illustration"
    fill
    style={{ objectFit: 'contain' }}
  />


          </div>
        </div>
      </div>
      </div>
      <div className="mb-40"> 
        <GoalSection/>
      </div>
      <div className="mb-40"> 
        <FindMyLevelTest/>
      </div>
      <div className="w-full overflow-hidden">
        <PerformanceInsightsLayout/>
      </div>
      <div className="mb-40"> 
        <MasterYourSyllabus/>
      </div>
      <div className="mb-40"> 
        <SuccessOddsAnalyzer/>
      </div>
      <div className="mt-20"> 
        <AppCta/>
      </div>
      <Footer/>
    </div>
  );
};

export default HeroSection;