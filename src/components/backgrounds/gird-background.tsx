import { HTMLAttributes } from 'react';

interface GridBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GridBackground({ children, className = "", ...props }: GridBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} {...props}>
      {/* Small grid background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      
      <div className="relative">
        {children}
      </div>
    </div>
  );
} 