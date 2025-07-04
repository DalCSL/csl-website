import { HTMLAttributes } from 'react';

interface LargeGridBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function LargeGridBackground({ children, className = "", ...props }: LargeGridBackgroundProps) {
  return (
    <div className={`relative isolate overflow-hidden ${className}`} {...props}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-384 w-512 -translate-x-1/2 stroke-gray-200 mask-[radial-gradient(96rem_96rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z M299.5 800h201v201h-201Z M899.5 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      
      <div className="relative">
        {children}
      </div>
    </div>
  );
} 