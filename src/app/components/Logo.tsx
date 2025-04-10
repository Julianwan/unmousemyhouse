interface LogoProps {className?:string}

export default function Logo({ className }:LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="#2563eb"
      strokeWidth="2"
    >
      {/* Cheese wedge silhouette */}
      <path
        d="M10 30L30 30L20 10Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Swiss cheese holes */}
      <circle cx="15" cy="25" r="2" />
      <circle cx="22" cy="20" r="1.5" />
      <circle cx="25" cy="27" r="1" />
      {/* Larger mouse silhouette on top */}
      <path
        d="M18 10C19.5 7 22.5 7 24 10C25.5 13 24 15 21 15H20C18.5 15 17 14 17 12C17 10 18 10 18 10Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 15C21 18 24 21 27 21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}