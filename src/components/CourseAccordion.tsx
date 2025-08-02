import React, { useState } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';
import { Course } from '../types';
import TopicCard from './TopicCard';

interface CourseAccordionProps {
  course: Course;
  isDark: boolean;
}

const CourseAccordion: React.FC<CourseAccordionProps> = ({ course, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`
      rounded-xl border transition-all duration-300 hover:shadow-lg
      ${isDark 
        ? 'border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:shadow-blue-500/10' 
        : 'border-gray-200 bg-white/70 backdrop-blur-sm hover:shadow-blue-500/20'
      }
    `}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full rounded-xl p-6 text-left transition-all duration-300
          ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50/50'}
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`
              rounded-lg p-3 bg-gradient-to-r ${course.color} shadow-lg
            `}>
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className={`
                text-xl font-bold transition-colors duration-300
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {course.name}
              </h3>
              <p className={`
                text-sm transition-colors duration-300
                ${isDark ? 'text-gray-400' : 'text-gray-600'}
              `}>
                {course.description}
              </p>
            </div>
          </div>
          <ChevronDown className={`
            h-5 w-5 transition-all duration-300
            ${isDark ? 'text-gray-400' : 'text-gray-500'}
            ${isOpen ? 'rotate-180' : ''}
          `} />
        </div>
      </button>
      
      <div className={`
        overflow-hidden transition-all duration-500 ease-in-out
        ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="border-t border-gray-200/20 p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {course.topics.map((topic, index) => (
              <div
                key={topic.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <TopicCard topic={topic} isDark={isDark} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAccordion;