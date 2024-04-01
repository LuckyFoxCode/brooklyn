import clsx from 'clsx';
import React from 'react';
import styles from './Container.module.scss';

interface Container {
  className?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<Container> = ({ className, children }) => {
  return <div className={clsx(styles.Container, className)}>{children}</div>;
};
