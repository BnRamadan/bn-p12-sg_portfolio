import React from 'react';

interface ProgressBarProps {
  progress: number;
  colorClass?: string;
  backgroundColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  colorClass = 'bg-blue-500',
  backgroundColor = 'bg-gray-200'
}) => {
  return (
    <div className={`w-full h-2 rounded-full overflow-hidden ${backgroundColor}`}>
      <div 
        className={`h-full rounded-full ${colorClass} transition-all duration-1000 ease-out`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;