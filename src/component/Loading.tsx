"use client"

import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"


interface LoadingScreenProps {
  onLoaded: () => void
}


const Layoute = ({ onLoaded }: LoadingScreenProps) => {
    const [loadingText, setLoadingText] = useState("Initializing...")
    const messages = ["Loading assets...", "Optimizing experience...", "Almost there...", "Ready!"]
    let messageIndex = 0
    const [isLoading, setLoading] = React.useState(true);

    useEffect(()=>{
        setLoading(true); // Set loading to true initially
        const interval = setInterval(() => {
      if (messageIndex < messages.length - 1) {
        setLoadingText(messages[messageIndex])
        messageIndex++
      } else {
        clearInterval(interval)
        // Simulate a final delay before hiding the loading screen
        setTimeout(() => {
          setLoading(false); // Set loading to false when done
          onLoaded()
        }, 500) // Short delay after "Ready!"
      }
    }, 1000) // Change text every 1 second
     // Simulate overall loading time
    const totalLoadingTime = messages.length * 1000 + 500 // Total time for messages + final delay
    const timeout = setTimeout(() => {
      clearInterval(interval) // Ensure interval is cleared if loading finishes early
      setLoading(false); // Set loading to false when done
      onLoaded()
    }, totalLoadingTime)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
    }, [onLoaded]);
    const Loader = () => {
            return(
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
            <Loader2 className="h-12 w-12 animate-spin text-gray-400" /> {/* Centered grey circle */}
            <p className="absolute bottom-20 text-sm opacity-40">{loadingText}</p> {/* Text at middle-bottom */}
            </div>
            );
    }
    return (
        <>
            <div>LAYOUT</div>
            {isLoading? (<Loader/> ) : (<Outlet/>)}
        </>
    );
}


export {Layoute};