import clsx from 'clsx';
import React from 'react';
import styles from './Input.module.css';

type InputType = 'primary' | 'secondary';

type Props = {
  onChange?: () => void;
  onPressEnter?: () => void;
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
};

function Input({
  onChange,
  onPressEnter,
  label,
  size = 'm',
  placeholder,
  disabled,
  block,
  name,
  required,
  className,
  addonAfter,
  addonBefore,
  prefixBefore,
  prefixAfter,
}: Props) {
  const _onPressEnter = (e) => {
    e.key === 'Enter' && onPressEnter();
  };

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
          onKeyDown={_onPressEnter}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
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
}

export default Input;
