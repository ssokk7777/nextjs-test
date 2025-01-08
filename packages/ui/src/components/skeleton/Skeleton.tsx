import React from 'react';
import './skeleton.scss';

interface SkeletonProps {
  animation?: 'pulse' | 'wave' | false
  height?: number | string
  variant?: 'circular' | 'rectangular' | 'rounded'
  width?: number | string
}

export const Skeleton = ({
    animation = 'pulse',
    height = 100,
    variant = 'rectangular',
    width = 100,
    ...props
  }: SkeletonProps) => {
  const classNames = [
    'ktc-skeleton-root',
    animation && `animation-${animation}`,
    `variant-${variant}`
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classNames}
      style={{ width: width || 0, height: height || 0 }}
      {...props}
    />
  );
};
