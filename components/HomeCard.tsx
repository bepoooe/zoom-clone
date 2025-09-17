'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 px-6 py-8 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-2xl cursor-pointer transition-all duration-300 hover-lift border border-brand-orange-400/20 shadow-lg hover:shadow-brand-orange-500/25 modern-card group',
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center size-14 rounded-xl border-2 border-brand-orange-300 bg-gradient-to-br from-brand-orange-500/50 to-brand-orange-600/50 shadow-lg shadow-brand-orange-500/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
        <Image 
          src={img} 
          alt="meeting" 
          width={28} 
          height={28}
          className="brightness-200 contrast-150 saturate-150 transition-all duration-300"
        />
      </div>
      
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-white drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg font-medium text-white/90 drop-shadow-md">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HomeCard;
