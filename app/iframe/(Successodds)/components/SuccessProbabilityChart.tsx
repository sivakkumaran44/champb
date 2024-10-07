import SuccessRate from './SuccessRate';
import SuccessProbabilityProgressChart from './SuccessProbabilityProcessChart';
import SuccessProbabilityTracker from './SuccessProbabilityTracker';
export default function CombinedSuccessProbabilityChart() {
  return (
    <div className="fixed inset-0 w-full max-w-[300px] mx-auto px-2 py-2 flex flex-col space-y-6 overflow-y-auto"> {/* Enable vertical scrolling */}
      <div className="flex-shrink-0">
        <SuccessRate />
      </div>
      <div className="flex-shrink-0">
        <SuccessProbabilityProgressChart />
      </div>
      <div className="flex-shrink-0">
        <SuccessProbabilityTracker />
      </div>
     
    </div>
  );
}