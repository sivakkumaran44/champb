import React from 'react'
export default function Component() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white relative">
     
      <div className="w-full md:w-1/2 mb-8 md:mb-0 relative z-10">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
          <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
         <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <iframe
              src="http://localhost:3000/iframe"
              className="w-full h-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
              allow="fullscreen"
              sandbox="allow-same-origin allow-scripts"
              title="Mobile Phone Preview"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-8 relative z-10">
        <h3 className="scroll-m-20 text-2xl mb-6 text-emerald-500 font-semibold tracking-tight">
          Success Odds Analyzer
        </h3>
        <p className="text-lg text-slate-700 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-400 scrollbar-track-gray-100">
          Gain valuable insights into your exam readiness with bChamp&apos;s predictive analytics. Our system assesses
          your performance data to estimate your selection probability, helping you focus your efforts where they
          matter most.
        </p>
      </div>
    </div>
  )
}
