import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.css';

type ButtonTheme = 'primary' | 'secondary';
type ShapeType = 'default' | 'pill';
type DisplayType = 'primary' | 'secondary';

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  type?: ButtonTheme;
  shape?: ShapeType;
  size?: 'm' | 's';
  isLoading?: boolean;
  disabled?: boolean;
};

function Button({
  onClick,
  children,
  isLoading,
  size = 'm',
  type = 'primary',
  shape = 'default',
  disabled,
}: Props) {
  return (
    <button className={styles.root} type={'submit'} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
