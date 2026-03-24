"use client";

interface ScrollingTermsProps {
  terms: string;
  speed?: string; // e.g. "20s"
  className?: string;
  id?: string;
}

export const ScrollingTerms = ({ terms, speed = "30s", className = "", id }: ScrollingTermsProps) => {
  return (
    <div 
      id={id}
      className={`relative w-full overflow-hidden whitespace-nowrap opacity-100 pointer-events-none mb-8 ${className}`}
      style={{ background: 'transparent', border: 'none' }}
    >
      <div 
        className="inline-block px-[100%] animate-scroll-text font-body italic text-[#24A8E1] text-[1.1rem]"
        style={{ 
          animationDuration: speed,
          textShadow: '0 0 10px rgba(228, 168, 55, 0.8)',
          willChange: 'transform'
        }}
      >
        {terms}
      </div>
    </div>
  );
};
