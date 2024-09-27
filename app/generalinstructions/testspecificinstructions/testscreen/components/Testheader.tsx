import React from 'react';
import { useRouter } from 'next/navigation';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import Logo1 from '@/public/assets/img/Frame 427321252.svg';
import TestHeaderData from '@/components/data/testheader.json';
interface TestHeaderProps {
  testTitle: string;
}
const TestHeader: React.FC<TestHeaderProps> = ({ testTitle }) => {
  const [timeLeft, setTimeLeft] = React.useState<number>(3600);
  const [isFullScreen, setIsFullScreen] = React.useState<boolean>(false);
  const router = useRouter();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const checkFullScreen = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', checkFullScreen);
    return () => {
      document.removeEventListener('fullscreenchange', checkFullScreen);
    };
  }, []);

  const formatTime = (time: number): { minutes: string; seconds: string } => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  const { minutes, seconds } = formatTime(timeLeft);

  const handleViewInstructions = () => {
    router.push('/generalinstructions/testspecificinstructions/testscreen/instructions');
  };

  const handleViewQuestionPaper = () => {
    router.push('/generalinstructions/testspecificinstructions/testscreen/questionpaper');
  };

  const handleFullScreen = () => {
    const elem = document.documentElement as HTMLElement & {
      webkitRequestFullscreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
    }; 
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(); 
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen(); 
    }
  };
  
  const handleExitFullScreen = () => {
    const doc = document as Document & {
      webkitExitFullscreen?: () => Promise<void>;
      msExitFullscreen?: () => Promise<void>;
    }; 
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen(); 
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen(); 
    }
  };
  
  return (
    <>
      <header className="flex items-center justify-between mb-4 p-4 md:hidden">
        <div className="bg-blue-50 h-14 flex items-center justify-between w-full rounded-xl">
          <div className="flex items-center ml-4">
            <Image 
              src={Logo1} 
              alt="bChamp Logo" 
              className="w-full h-auto object-contain" 
              priority={true} 
            />
          </div>
          <div className="flex-grow flex justify-center">
            <div className="text-sm font-medium text-slate-700 bg-green-100 px-3 py-1 rounded-full">
              {testTitle}
            </div>
          </div>
        
        </div>
      </header>
      <div className="hidden md:block">
        <div className="flex justify-between items-center p-2 bg-white">
          <div className="flex items-center space-x-12">
            <div className="flex items-center ml-8">
              <Image
                src={Logo1}
                alt="bChamp Logo"
                className="w-full h-auto object-contain"
                priority={true}
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold ml-16">{testTitle}</h1>
            </div>
          </div>
          <div className="flex-grow flex justify-center">
            <div className="flex items-center space-x-2 bg-slate-200 px-3 py-1 rounded-md">
              <Clock size={16} className="text-slate-700" />
              <span className="text-sm font-medium text-slate-700">
                Time Left: {minutes} Minutes : {seconds} Seconds
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="px-3 py-1 text-sm bg-slate-100 border border-gray-300 rounded-xl hover:bg-gray-50"
              onClick={handleViewInstructions}
            >
              {TestHeaderData.buttons.viewInstructions}
            </button>
            <button
              className="px-3 py-1 text-sm bg-slate-100 border border-gray-300 rounded-xl hover:bg-gray-50"
              onClick={handleViewQuestionPaper}
            >
              {TestHeaderData.buttons.viewQuestionPaper}
            </button>
            {isFullScreen ? (
              <button
                className="px-3 py-1 text-sm bg-slate-100 border border-gray-300 rounded-xl hover:bg-gray-50"
                onClick={handleExitFullScreen}
              >
                Exit Full Screen
              </button>
            ) : (
              <button
                className="px-3 py-1 text-sm bg-slate-100 border border-gray-300 rounded-xl hover:bg-gray-50 flex items-center"
                onClick={handleFullScreen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                {TestHeaderData.buttons.fullScreen}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestHeader;
