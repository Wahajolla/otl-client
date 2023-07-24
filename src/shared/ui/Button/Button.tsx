import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.css';

type ButtonTheme = 'primary' | 'secondary' | 'link' | 'dashed' | 'text';
type ShapeType = 'default' | 'pill';
type DisplayType = 'primary' | 'secondary';

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  type?: ButtonTheme;
  shape?: ShapeType;
  size?: 'm' | 's' | 'lg';
  loading?: boolean;
  block?: boolean;

  disabled?: boolean;

  className?: string;
};

function Button({
  onClick,
  children,
  loading,
  block = false,
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
        styles[`root_type_${shape}`],
        styles[`root_type_${shape}`],
        disabled && styles[`root_disabled`],
        block && styles[`root_block`],
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
