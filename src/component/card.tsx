import React from "react";


export type ClassNameProps = {
    className?: string;
    children?: React.ReactNode;
}

const Card = ({ className = "", children }: ClassNameProps) => {
    return(
        <div className={`group relative overflow-hidden rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 text-card-foreground shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-gray-800/40 ${className}`}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex-row justify-items-stretch">
                {children}
            </div>
        </div>
    );
}

const CardContent = ({ className = "", children }: ClassNameProps) => {
    return(
        <div className={`p-6 space-y-4 ${className}`}>
            {children}
        </div>
    );
}

const CardHeader = ({ className = "", children }: ClassNameProps) => {
    return(
        <div className={`p-6 pb-0 ${className}`}>
            {children}
        </div>
    );
}

const CardTitle = ({ className = "", children }: ClassNameProps) => {
    return(
        <h3 className={`text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 ${className}`}>
            {children}
        </h3>
    );
}

const CardDescription = ({ className = "", children }: ClassNameProps) => {
    return(
        <p className={`text-gray-400 leading-relaxed ${className}`}>
            {children}
        </p>
    );
}

const CardFooter = ({ className = "", children }: ClassNameProps) => {
    return(
        <div className={`p-6 pt-0 ${className}`}>
            {children}
        </div>
    );
}

export { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter };