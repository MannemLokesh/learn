import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`
        relative w-10 h-10 overflow-hidden rounded-full p-2 transition-all duration-300 flex items-center justify-center
        ${isDark 
          ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600 hover:shadow-yellow-400/20' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-gray-400/20'
        }
        hover:scale-110 hover:shadow-lg
      `}
    >
      {/* Moon Icon */}
      <Moon
        className={`
          absolute h-5 w-5 transition-all duration-300
          ${isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-90'}
        `}
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
      />

      {/* Sun Icon */}
      <Sun
        className={`
          absolute h-5 w-5 transition-all duration-300
          ${isDark ? 'opacity-0 scale-0 -rotate-90' : 'opacity-100 scale-100 rotate-0'}
        `}
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
      />
    </button>
  );
};

export default ThemeToggle;
