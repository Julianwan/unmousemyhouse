interface LogoProps {className?:string
  theme: "DARK" | "LIGHT"
}

export default function Logo({ className, theme }:LogoProps) {
  return (
   <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Mouse-2--Streamline-Streamline-3.0" height="24" width="24"><desc>Mouse 2 Streamline Icon: https://streamlinehq.com</desc><path d="m23.24 15.7 -5.45 -3.78a0.25 0.25 0 0 1 -0.09 -0.3A4.44 4.44 0 0 0 18 10a4.51 4.51 0 0 0 -4.5 -4.5 4.05 4.05 0 0 0 -3 1.24 4.25 4.25 0 0 0 -1.09 4.15 0.76 0.76 0 0 1 -0.52 0.93 0.75 0.75 0 0 1 -0.92 -0.52 5.73 5.73 0 0 1 0.94 -5 0.26 0.26 0 0 0 -0.11 -0.39 6.5 6.5 0 0 0 -7.6 2.4 6.5 6.5 0 0 0 1.64 9 6.43 6.43 0 0 0 3.65 1.19h16a1.5 1.5 0 0 0 0.74 -2.8Zm-5.74 0.3a1 1 0 1 1 1 -1 1 1 0 0 1 -1 1Z" fill={theme === "DARK" ? "#FFFFFF" :"#000000"} strokeWidth="1"></path></svg>
  );
}