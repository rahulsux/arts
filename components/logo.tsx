import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export default function Logo({ 
  size = 'md', 
  className = '', 
  showText = true,
}: LogoProps) {
  const sizeMap = {
    sm: 'h-7 w-7',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
  };

  const textSizeMap = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn(sizeMap[size], 'flex items-center justify-center flex-shrink-0')}>
        <Image 
          src="/logo.png" 
          alt="AruArts Logo" 
          width={40}
          height={40}
          className={cn(sizeMap[size], 'w-auto h-auto')}
        />
      </div>
      {showText && (
        <span className={cn('font-serif font-semibold tracking-tight text-primary', textSizeMap[size])}>
          AruArts
        </span>
      )}
    </div>
  );
}
