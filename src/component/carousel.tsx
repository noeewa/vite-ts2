import React, { useState, useRef, useEffect } from "react";

type CarouselProps = {
  children: React.ReactNode;
  opts?: {
    align?: string;
    loop?: boolean;
  };
  className?: string;
};

export type ClassNameProps = {
    className?: string;
    children?: React.ReactNode;
}

const CarouselContext = React.createContext<{
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  itemsCount: number;
  setItemsCount: (count: number) => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
}>({
  currentIndex: 0,
  setCurrentIndex: () => {},
  itemsCount: 0,
  setItemsCount: () => {},
  canScrollPrev: false,
  canScrollNext: false,
  scrollPrev: () => {},
  scrollNext: () => {},
});

const Carousel = ({ children, opts = {}, className = "" }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsCount, setItemsCount] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const canScrollPrev = currentIndex > 0;
    const canScrollNext = currentIndex < itemsCount - 1;
    
    const scrollPrev = () => {
        if (canScrollPrev) {
            setCurrentIndex(currentIndex - 1);
        } else if (opts.loop) {
            setCurrentIndex(itemsCount - 1);
        }
    };
    
    const scrollNext = () => {
        if (canScrollNext) {
            setCurrentIndex(currentIndex + 1);
        } else if (opts.loop) {
            setCurrentIndex(0);
        }
    };

    return (
        <CarouselContext.Provider value={{
            currentIndex,
            setCurrentIndex,
            itemsCount,
            setItemsCount,
            canScrollPrev,
            canScrollNext,
            scrollPrev,
            scrollNext
        }}>
            <div className={` group ${className}`} ref={containerRef}>
                
                {/* Background glow effect */}
                <div></div>
                
                {/* Content */}
                <div className="relative z-10 h-full">
                    {children}
                </div>
            </div>
        </CarouselContext.Provider>
    );
}

const CarouselContent = ({ className = "", children }: ClassNameProps) => {
    const { currentIndex, setItemsCount } = React.useContext(CarouselContext);
    
    useEffect(() => {
        const childrenArray = React.Children.toArray(children);
        setItemsCount(childrenArray.length);
    }, [children, setItemsCount]);

    return (
        <div className={`overflow-hidden rounded-md ${className}`}>
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {children}
            </div>
        </div>
    );
}

const CarouselNext = ({ className = "", children }: ClassNameProps) => {
    const { scrollNext, canScrollNext } = React.useContext(CarouselContext);
    
    return (
        <button
            className={`absolute border-0 hover:border-0 actives right-0 top-1/2 bg-transparent -translate-y-1/2 translate-x-18 w-20 h-20 text-gray-400 transition-all duration-300 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed group ${className}`}
            onClick={scrollNext}
            disabled={!canScrollNext}
        >
            {children || (
                <div className="flex items-center justify-center">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 transition-transform duration-200">
                        <polyline points="9,18 15,12 9,6" />
                    </svg>
                </div>
            )}
            
        </button>
    );
}

const CarouselPrevious = ({ className = "", children }: ClassNameProps) => {
    const { scrollPrev, canScrollPrev } = React.useContext(CarouselContext);
    
    return (
        <button
            className={`absolute border-0 hover:border-0 actives left-0 top-1/2 -translate-y-1/2 -translate-x-18 w-20 h-20 bg-transparent text-gray-400 transition-all duration-300 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed group ${className}`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
        >
            {children || (
                <div className="flex items-center justify-center">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-0.5 transition-transform duration-200">
                        <polyline points="15,18 9,12 15,6" />
                    </svg>
                </div>
            )}
            
        
        </button>
    );
}

const CarouselItem = ({ className = "", children }: ClassNameProps) => {
    return (
        <div className={`min-w-0 shrink-0 grow-0 ${className}`}>
            {children}
        </div>
    );
}

const CarouselIndicators = ({ className = "" }: { className?: string }) => {
    const { currentIndex, setCurrentIndex, itemsCount } = React.useContext(CarouselContext);
    
    return (
        <div className={`flex justify-center gap-2 mt-6 ${className}`}>
            {Array.from({ length: itemsCount }, (_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                            ? '' 
                            : ''
                    }`}
                />
            ))}
        </div>
    );
}

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselIndicators }