import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        {/* House */}
        <path
          d="M5 20L20 7L35 20V35H5V20Z"
          fill="#2563EB"
          stroke="#1E40AF"
          strokeWidth="2"
        />
        
        {/* Roof */}
        <path
          d="M5 20L20 7L35 20"
          stroke="#1E40AF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Door */}
        <path
          d="M16 35V25H24V35"
          fill="#FBBF24"
          stroke="#1E40AF"
          strokeWidth="2"
        />
        
        {/* Mouse body */}
        <ellipse
          cx="28"
          cy="15"
          rx="5"
          ry="4"
          fill="#94A3B8"
          stroke="#475569"
          strokeWidth="1"
        />
        
        {/* Mouse head */}
        <circle
          cx="33"
          cy="13"
          r="3"
          fill="#94A3B8"
          stroke="#475569"
          strokeWidth="1"
        />
        
        {/* Mouse ear */}
        <circle
          cx="34"
          cy="11"
          r="1.5"
          fill="#F87171"
          stroke="#475569"
          strokeWidth="0.5"
        />
        
        {/* Mouse eye */}
        <circle
          cx="34"
          cy="12.5"
          r="0.5"
          fill="#000000"
        />
        
        {/* Mouse tail */}
        <path
          d="M23 15C23 15 21 17 20 19"
          stroke="#475569"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Logo;
