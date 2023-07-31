import clsx from 'clsx';
import React, { forwardRef, MouseEventHandler } from 'react';

import styles from './input.module.css';

type InputType = 'primary' | 'secondary';

type InputProps = {
  size?: 's' | 'm' | 'l';
  disabled?: boolean;
  block?: boolean;
  required?: boolean;
  placeholder?: string;
  className?: string;
  name: string;
  label?: string;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  prefixAfter?: React.ReactNode;
  prefixBefore?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref
) {
  const {
    size,
    block,
    label,
    addonAfter,
    addonBefore,
    name,
    disabled,
    prefixBefore,
    prefixAfter,
    className,
    ...rest
  } = props;
  return (
    <span
      className={clsx(
        styles['input-container'],
        block && styles[`input-container_block`]
      )}
    >
      {label && (
        <label htmlFor={name} className={clsx(styles['input-label'])}>
          {label}
        </label>
      )}
      <span className={styles['input-inner-container']}>
        {addonBefore && (
          <span className={styles['input-addon']}>{addonBefore}</span>
        )}
        {prefixBefore && (
          <span className={styles['input-prefix']}>{prefixBefore}</span>
        )}
        <input
          {...rest}
          ref={ref}
          type="text"
          id={name}
          disabled={disabled}
          name={name}
          className={clsx(
            styles.input,
            styles[`input_size_${size}`],
            block && styles.input_block,
            className
          )}
        />
        {prefixAfter && (
          <span className={styles['input-prefix']}>{prefixAfter}</span>
        )}
        {addonAfter && (
          <span className={styles['input-addon']}>{addonAfter}</span>
        )}
      </span>
    </span>
  );
});

export { Input };
