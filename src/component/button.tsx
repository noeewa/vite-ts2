import React from "react";


type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "ghost" | "outline" | "gradient" | "glass";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "icon";
  asChild?: boolean;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "default",
  className = "rounded-sm",
  size = "sm",
  asChild = false,
  onClick,
  ...props
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group";
  
  const variantClasses = {
    default: "bg-white border hover:bg-white/100 hover:border-white hover:text-black/20 text-gray-800 font-bold px-4 py-2 rounded-sm shadow-lg hover:shadow-white/10 transition-all duration-300 transform hover:scale-105",
    ghost: "text-gray-300 hover:text-black/20 hover:bg-gray-800/50 backdrop-blur-sm",
    outline: "border border-gray-500/50 hover:border-white/50 text-gray-300 hover:text-white bg-transparent hover:bg-white/10 hover:shadow-white/10 font-semibold rounded-sm transition-all duration-300",
    gradient: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105",
    glass: "bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:border-cyan-500/50 hover:text-black/20 hover:bg-gray-800/50"
  };
  
  const sizeClasses = {
    sm: "h-9 px-4 text-sm rounded-sm",
    md: "h-11 px-6 text-base rounded-xl",
    lg: "h-13 px-8 text-lg rounded-sm",
    xl: "h-16 px-12 text-xl rounded-2xl",
    icon: "h-11 w-11 rounded-xl"
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (asChild && React.isValidElement(children)) {
    const childProps = children.props as any;
    return React.cloneElement(children, {
      ...childProps,
      className: `${childProps.className || ''} ${combinedClasses}`.trim(),
      onClick,
      ...props
    });
  }
  
  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      <div>
      {/* Gradient overlay for hover effect */}
      <div className="absolute inset-0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-600/10 transition-all duration-300 rounded-inherit"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      </div>
    </button>
  );
}