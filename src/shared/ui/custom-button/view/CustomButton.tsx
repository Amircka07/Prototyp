import classNames from 'classnames';
import type { TButtonProps } from '../types/types';
import styles from './CustomButton.module.scss';
import type { FC } from 'react';

export const CustomButton: FC<TButtonProps> = ({
  variant,
  children,
  className,
  disabled = false,
  pressed = false,
  onClick,
}) => {
  const buttonClasses = classNames(
    styles.button,
    styles[variant],
    {
      [styles.disabled]: disabled,
      [styles.pressed]: pressed,
    },
    className
  );

  return (
    <button className={buttonClasses}
      onClick={onClick} 
      disabled={disabled}
     >
      {children}
    </button>
  );
};
