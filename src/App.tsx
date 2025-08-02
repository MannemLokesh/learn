import React, { useState, useEffect } from 'react';
import { GraduationCap, Code } from 'lucide-react';
import CourseAccordion from './components/CourseAccordion';
import ThemeToggle from './components/ThemeToggle';
import { courses } from './data/courses';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className={`
      min-h-screen transition-all duration-500
      ${isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }
    `}>
      {/* Animated background pattern */}


      <div className="relative z-10">
        {/* Header */}
        <header className={`
          sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300
          ${isDark 
            ? 'border-gray-700/50 bg-gray-900/70' 
            : 'border-gray-200/50 bg-white/70'
          }
        `}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-2">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className={`
                    text-2xl font-bold transition-colors duration-300
                    ${isDark ? 'text-white' : 'text-gray-900'}
                  `}>
                    Deeplylearn Academy
                  </h1>
                  <p className={`
                    text-sm transition-colors duration-300
                    ${isDark ? 'text-gray-400' : 'text-gray-600'}
                  `}>
                    Master programming with structured learning paths
                  </p>
                </div>
              </div>
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="container mx-auto px-4 pt-8">
          {/* Hero section */}
          <div className="mb-12 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
              <Code className="h-10 w-10 text-white" />
            </div>
            <h2 className={`
              mb-4 text-4xl font-bold transition-colors duration-300
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              Choose Your Learning Path
            </h2>
            <p className={`
              mx-auto max-w-2xl text-lg transition-colors duration-300
              ${isDark ? 'text-gray-300' : 'text-gray-600'}
            `}>
              Expand your programming skills with our comprehensive courses. 
              Each course is designed with hands-on examples and practical projects 
              to accelerate your learning journey.
            </p>
          </div>

          {/* Course accordions */}
          <div className="space-y-6">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <CourseAccordion course={course} isDark={isDark} />
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className={`
            py-4 text-center transition-colors duration-300
            ${isDark ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'}
          `}>
            <p>© 2025 Deeplylearn Academy.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;