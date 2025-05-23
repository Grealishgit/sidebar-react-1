import React from 'react';
import { Moon, Plus, Sun } from 'lucide-react';

const MainContent = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="flex-1 transition-all duration-300 bg-[#F3F5F7] px-3 h-full overflow-hidden">
      <div className={`border-2 rounded-md border-[rgba(0,0,0,0.08)] h-full p-6 shadow-sm flex flex-col items-center justify-center
      ${isDarkMode ? 'bg-gray-700 text-white border-[#444]' : 'bg-white text-black border-[rgba(0,0,0,0.08)]'}    
        `}>
        {/* Custom folder SVG */}
        {


          isDarkMode ? <Sun size={30} className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'} `} onClick={() => setIsDarkMode(false)} />
            : <Moon size={30} className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'} `} onClick={() => setIsDarkMode(true)} />
        }
        {/* Text */}
        <p className="mt-4 text-sm text-gray-500">
          No files have been added yet
        </p>

        {/* Button */}
        <button className="mt-4 px-4 py-2 bg-[#3B40E8] text-white rounded-md text-sm hover:bg-[#3B40E8]/90 transition-colors duration-200 flex items-center gap-2">
          <Plus size={16} />
          <span>Add File</span>
        </button>
      </div>
    </div>
  );
};

export default MainContent;