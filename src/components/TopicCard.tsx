import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Topic } from '../types';
import { useState } from 'react';

interface TopicCardProps {
  topic: Topic;
  isDark: boolean;
}



const TopicCard: React.FC<TopicCardProps> = ({ topic, isDark }) => {
  const [selectedLinkType, setSelectedLinkType] = useState<'html' | 'pdf' | 'docs'>('html');

const handleOpenSelectedLink = () => {
  const url = topic.links?.[selectedLinkType];
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

  return (
    <div className={`
      group relative overflow-hidden rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
      ${isDark 
        ? 'border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:shadow-blue-500/10' 
        : 'border-gray-200 bg-white/70 backdrop-blur-sm hover:shadow-blue-500/20'
      }
    `}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative p-6">
        <h5 className={`
          mb-3 text-xl font-bold transition-colors duration-300
          ${isDark ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'}
        `}>
          {topic.title}
        </h5>
        
        <div className={`
          mb-4 max-h-32 overflow-y-auto scrollbar-thin transition-colors duration-300
          ${isDark 
            ? 'text-gray-300 scrollbar-thumb-gray-600 scrollbar-track-gray-800' 
            : 'text-gray-600 scrollbar-thumb-gray-400 scrollbar-track-gray-200'
          }
        `}>
          <p className="text-sm leading-relaxed">
            {topic.description}
          </p>
        </div>
        
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <div className="flex gap-2 items-center">
            <select
              value={selectedLinkType}
              onChange={(e) => setSelectedLinkType(e.target.value as 'html' | 'pdf' | 'docs')}
              className={`group/link flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200
                ${isDark
                  ? 'border border-gray-600 bg-gray-600 text-white'
                  : 'border border-gray-300 bg-gray-50 text-gray-900'
                }
              `}
            >
              <option value="html">Html</option>
              <option value="pdf">Pdf</option>
              <option value="docs">Docs</option>
            </select>

            <button
              onClick={handleOpenSelectedLink}
              className={`
                group/link flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200
                ${isDark
                  ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/25'
                  : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/25'
                }
                hover:shadow-lg transform hover:scale-105
              `}
            >
              <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover/link:scale-110" />
              Open {selectedLinkType.toUpperCase()}
            </button>
          </div>

          
          <a
            href={topic.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group/link flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200
              ${isDark
                ? 'border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }
              hover:shadow-lg transform hover:scale-105
            `}
          >
            <Github className="h-4 w-4 transition-transform duration-200 group-hover/link:scale-110" />
            Github Examples
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;