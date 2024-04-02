import clsx from 'clsx';
import React from 'react';

interface Container {
  className?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<Container> = ({ className, children }) => {
  return <div className={clsx(`container max-w-[1440px] px-5`, className)}>{children}</div>;
};
