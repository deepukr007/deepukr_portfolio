import React from 'react';

const CVBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* 1. Object Detection Bounding Boxes - Reduced Opacity */}
      {/* Box 1 - Top Right - Pastel Purple */}
      <div className="absolute top-[15%] right-[10%] w-64 h-48 border-2 border-pastel-purple/10 rounded-lg animate-float">
        <div className="absolute -top-3 -left-[1px] bg-bg-main/90 px-2 text-[10px] font-mono text-pastel-purple font-bold tracking-wider">
          OBJ_DETECT: 0.98
        </div>
        {/* Corner Brackets */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-pastel-purple/20"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-pastel-purple/20"></div>
      </div>

      {/* Box 2 - Bottom Left - Pastel Mint */}
      <div className="absolute bottom-[20%] left-[5%] w-56 h-56 border-2 border-pastel-mint/10 rounded-lg animate-float-delayed">
        <div className="absolute -bottom-3 right-2 bg-bg-main/90 px-2 text-[10px] font-mono text-pastel-mint font-bold tracking-wider">
          SEGMENTATION_MASK
        </div>
        {/* Crosshair Center */}
        <div className="absolute top-1/2 left-1/2 w-4 h-4 -mt-2 -ml-2 border-t border-l border-pastel-mint/20 transform rotate-45"></div>
      </div>

      {/* Box 3 - Middle Right - Pastel Pink - Wide */}
      <div className="absolute top-[45%] right-[25%] w-80 h-32 border border-dashed border-pastel-pink/10 rounded-sm animate-pulse-slow hidden md:block">
        <div className="absolute -top-2 left-2 text-[9px] font-mono text-pastel-pink/40">
          ANALYZING FRAME...
        </div>
      </div>

      {/* 2. Pose Estimation / Keypoints Lines (SVG) - Very subtle */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.1]">
        {/* A simple constellation/graph structure */}
        <circle cx="15%" cy="25%" r="3" className="fill-pastel-blue animate-pulse" />
        <circle cx="25%" cy="35%" r="3" className="fill-pastel-blue animate-pulse" />
        <line x1="15%" y1="25%" x2="25%" y2="35%" stroke="#60A5FA" strokeWidth="1" strokeDasharray="4 4" />
        
        <circle cx="85%" cy="60%" r="3" className="fill-pastel-purple animate-pulse" />
        <circle cx="75%" cy="70%" r="3" className="fill-pastel-purple animate-pulse" />
        <line x1="85%" y1="60%" x2="75%" y2="70%" stroke="#C084FC" strokeWidth="1" />
      </svg>

      {/* 3. Scanning Line Effect - Very subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pastel-purple/[0.03] to-transparent h-[20%] animate-scan w-full" style={{animationDuration: '8s'}}></div>
      
      {/* 4. Segmentation Blobs (More distinct edges than the blurred ones) */}
      <svg className="absolute top-1/4 left-1/4 w-64 h-64 opacity-[0.05] animate-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4ADE80" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-18,86.4,-3.7C82.7,10.5,72.6,23.5,63.1,35.2C53.6,46.9,44.7,57.3,33.6,64.4C22.5,71.5,9.2,75.2,-3.4,81.1C-16,87,-27.9,95.1,-38.5,90.4C-49.1,85.7,-58.4,68.2,-66.3,52.8C-74.2,37.4,-80.7,24.1,-82.6,10.2C-84.5,-3.7,-81.8,-18.2,-73.7,-30.2C-65.6,-42.2,-52.1,-51.7,-39,-59.6C-25.9,-67.5,-13,-73.8,1.3,-76C15.6,-78.2,31.2,-76.3,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>

      <svg className="absolute bottom-1/3 right-1/3 w-96 h-96 opacity-[0.05] animate-blob animation-delay-4000" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#60A5FA" d="M41.6,-70.2C54.1,-64.8,64.7,-55.4,72.5,-44C80.3,-32.6,85.3,-19.2,83.2,-6.7C81.1,5.8,71.9,17.4,62.8,28.1C53.7,38.8,44.7,48.6,34.2,56.5C23.7,64.4,11.8,70.4,0.4,69.7C-11,69,-22,61.6,-32.7,53.8C-43.4,46,-53.8,37.8,-61.6,27.4C-69.4,17,-74.6,4.4,-73.2,-7.5C-71.8,-19.4,-63.8,-30.6,-54.2,-39.8C-44.6,-49,-33.4,-56.2,-21.8,-62.2C-10.2,-68.2,1.8,-73,14.2,-73.3C26.6,-73.6,39.1,-69.4,41.6,-70.2Z" transform="translate(100 100)" />
      </svg>

    </div>
  );
};

export default CVBackground;