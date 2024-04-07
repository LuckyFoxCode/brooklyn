import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface Container {
  className?: string;
  children?: ReactNode;
}

export const Container: FC<Container> = ({ className, children }) => {
  return <div className={clsx(`container max-w-[1440px] px-5`, className)}>{children}</div>;
};
