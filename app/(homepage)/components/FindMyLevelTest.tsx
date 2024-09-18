import OtpForm from '@/components/useclient/FindMyLevelTestForm'; 

const FindMyLevelTest = () => {
  return (
    <div className="container px-4 sm:px-6 py-8 max-w-7xl mx-auto">
      <h2 className="scroll-m-20 pb-2 text-xl sm:text-2xl md:text-3xl text-slate-700 font-semibold tracking-tight first:mt-0">
        Assess Your Exam Fitness
      </h2>
      <p className="text-sm sm:text-base text-slate-700 mb-6 sm:mb-8 md:mb-12">
        Take 3 tests to find out where you stand and how to advance with our expert-level diagnostic exam
      </p>
      <div className="w-full max-w-sm sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg mx-auto bg-slate-100 rounded-lg shadow-sm overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
  <div className="relative h-10 sm:h-14 bg-slate-100 mb-6 sm:mb-10 md:mb-16 lg:mb-20">
    <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-slate-600 transform -skew-x-[40deg] rounded-br-lg origin-top-right overflow-hidden">
    
    </div>
    <div className="relative z-10 flex items-center h-full ml-4 sm:ml-6 md:ml-10 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">
      <h2 className="absolute inset-0 flex items-center">
        3 Free Mock Tests
      </h2>
    </div>
      <div className="absolute right-0 bottom-0 w-8 h-8 bg-slate-100 rounded-tl-full"></div>
    </div>
          <OtpForm />
      </div>
    </div>
  );
};

export default FindMyLevelTest;
