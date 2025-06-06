import React from 'react';
import styles from './CustomInput.module.scss';
import classNames from 'classnames';
import type { InputProps } from '../types/types';

export const CustomInput: React.FC<InputProps> = ({
  type = 'text',
  variant,
  onChange,
  placeholder,
  className,
  name,
  disabled = false,
}) => {
  const inputClasses = classNames(
    styles.input,
    styles[variant],
    {
      [styles.disabled]: disabled,
    },
    className
  );
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      className={inputClasses}
    />
  );
};
