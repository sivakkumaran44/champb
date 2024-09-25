import React from 'react';
import { Circle, Square, Triangle, Filter } from 'lucide-react'; 

const SidebarLegend = () => {
  return (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Filter className="w-5 h-5 mr-2" /> Filter by:
      </h3>
      <div className="flex items-center space-x-2">
        <button
          className="w-6 h-6 flex items-center justify-center bg-transparent border-none cursor-not-allowed"
          disabled
        >
          <Circle className="w-6 h-6 text-green-500 fill-green-500" />
        </button>
        <span>Answered</span>
      </div>

      <hr />

      <div className="flex items-center space-x-2">
        <button
          className="w-6 h-6 flex items-center justify-center bg-transparent border-none cursor-not-allowed"
          disabled
        >
          <Circle className="w-6 h-6 text-red-500 fill-red-500" />
        </button>
        <span>Not Answered</span>
      </div>

      <hr />
      <div className="flex items-center space-x-2">
        <button
          className="w-6 h-6 flex items-center justify-center bg-transparent border-none cursor-not-allowed"
          disabled
        >
          <Triangle className="w-6 h-6 text-purple-500 fill-purple-500" />
        </button>
        <span>Marked for Review</span>
      </div>

      <hr />
      <div className="flex items-center space-x-2">
        <button
          className="w-6 h-6 flex items-center justify-center bg-transparent border-none cursor-not-allowed"
          disabled
        >
          <Square className="w-6 h-6 text-slate-700 broder-b broder-slate-700 fill-slate-700" />
        </button>
        <span>Not Visited</span>
      </div>
    </div>
  );
};

export default SidebarLegend;
