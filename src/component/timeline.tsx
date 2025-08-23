import React from "react";

type TimelineProps = {
  items: string[];
  className?: string;
};

const Timeline = ({ items, className = "" }: TimelineProps) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 md:pl-0 md:space-y-2">
          
          
          {/* Horizontal timeline for large screens */}
          <div className="overflow-visible justify-items-center h-full">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            
          </div>
          
          <div className="md:pt-0">
            <div className="mt-2 space-y-2 md:text-center">
              
                <p key={index} className="text-gray-400 text-sm leading-relaxed">
                  {item}
                </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Timeline };