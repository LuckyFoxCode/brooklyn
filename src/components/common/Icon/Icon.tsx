import clsx from 'clsx';
import React from 'react';
import { IconType } from 'utils';

interface IconProps {
  name: IconType;
  className?: string;
  onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({ name, className, onClick }) => {
  switch (name) {
    case 'profile':
      return (
        <svg
          className={clsx(className)}
          onClick={onClick}
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM3,22V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v4a1,1,0,0,1-2,0V18a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v4a1,1,0,0,1-2,0Z' />
        </svg>
      );
    case 'burger':
      return (
        <svg
          className={clsx(className)}
          onClick={onClick}
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M4 18L20 18'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M4 12L20 12'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M4 6L20 6'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      );
    default:
      return null;
  }
};
