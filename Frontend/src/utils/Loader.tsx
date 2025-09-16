import { useState, useEffect } from "react";

const Loader = ({ isLoading = true, text = "Loading..." }) => {
  const [dots, setDots] = useState("");

  // Animate the loading dots
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      {/* Spinner Animation */}
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
        
        {/* Spinning segment */}
        <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 animate-spin"></div>
        
        {/* Inner dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
      </div>

      {/* Loading text */}
      <div className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-200">
        {text}
        <span className="inline-block w-8 text-left">{dots}</span>
      </div>
    </div>
  );
};

export default Loader;