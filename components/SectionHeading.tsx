
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light }) => {
  return (
    <div className="mb-12 text-center">
      {subtitle && (
        <span className={`block text-sm uppercase tracking-[0.3em] mb-4 font-medium ${light ? 'text-ivory/80' : 'text-tan'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl font-serif ${light ? 'text-white' : 'text-espresso'}`}>
        {title}
      </h2>
      <div className={`h-px w-24 mx-auto mt-6 ${light ? 'bg-ivory/30' : 'bg-tan/40'}`}></div>
    </div>
  );
};
