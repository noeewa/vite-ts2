import React from "react";


type FotoPProps = {
    src?: string;
    alt?: string;
    className?: string;
}

export default function FotoP({
    src = "../src/images/patung.jpg",
    alt = "Profile Photo",
    className = ""
}: FotoPProps) {
    return(
        <div className={`relative overflow-hidden rounded-full ${className}`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23D1D5DB' font-family='Arial' font-size='16'%3EProfile%3C/text%3E%3C/svg%3E";
                }}
            />
        </div>
    );
}