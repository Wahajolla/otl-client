import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.css';

type ButtonTheme = 'primary' | 'secondary' | 'link';
type ShapeType = 'default' | 'pill';
type DisplayType = 'primary' | 'secondary';

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  type?: ButtonTheme;
  shape?: ShapeType;
  size?: 'm' | 's';
  loading?: boolean;

  disabled?: boolean;
  link?: boolean;
  className?: string;
};

function Button({
  onClick,
  children,
  loading,
  size = 'm',
  type = 'primary',
  shape = 'default',
  disabled,
  className,
}: Props) {
  return (
    <button
      className={clsx(
        styles.root,
        styles[`root_size_${size}`],
        styles[`root_type_${type}`],
        className
      )}
      type={'submit'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
