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
import HeroSectionClientsid from '@/components/useclient/HeroSectionClientside';
import CardCarsoel from './CardCarsoel';

const HeroSection: React.FC = () => {
  return (
    <div>   
      <div className="w-full max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">   
        <div className="min-h-[500px] rounded-lg p-6 sm:p-8 bg-slate-200 flex flex-col md:flex-row items-center mb-20">
          <div className="w-full md:w-1/2 space-y-6 pr-0 md:pr-8">
            <div className="space-y-3 ">
              <p className="text-md sm:text-3xl text-slate-700">Practice Makes a Person Perfect. Agree?</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-slate-700 font-medium ">
                Our <span className="text-slate-700 font-semibold">Progressive Practice Test</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-700 ">
                help you to <span className="text-slate-700 font-semibold">rank in top 1%</span>
              </h2>
              <p className="text-sm font-thin text-slate-700">Trusted by Toppers to Practice, improve and succeed.</p>
            </div>
            <HeroSectionClientsid/>  
          </div> 
          <div className="w-full md:w-1/2 mt-8 md:mt-0 hidden md:block">
            <div className="relative w-full h-[340px] sm:h-[440px]"> 
              <Image
                src={illustrationImage}
                alt="Progressive Practice Test Illustration"
                fill
                style={{ objectFit: 'contain' }}
                priority={true} 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden"> 
        <CardCarsoel/>
      </div>
      <div className="w-full overflow-hidden"> 
        <GoalSection/>
      </div>
      <div className="w-full overflow-hidden"> 
        <FindMyLevelTest/>
      </div>
      <div className="w-full overflow-hidden">
        <PerformanceInsightsLayout/>
      </div>
      <div className="w-full overflow-hidden"> 
        <MasterYourSyllabus/>
      </div>
      <div className="w-full overflow-hidden"> 
        <SuccessOddsAnalyzer/>
      </div>
      <div className="w-full overflow-hidden"> 
        <AppCta/>
      </div>
      <Footer/>
    </div>
  );
};

export default HeroSection;