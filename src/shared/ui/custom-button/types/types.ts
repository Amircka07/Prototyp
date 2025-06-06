import type { ReactNode } from 'react';

export type TButtonProps = {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  pressed?: boolean;
  isTextBtn?: boolean;
  target?: string;
  TIconColor?: 'orange' | 'black' | 'white';
  TIsUpper?: boolean,
  TIconRotate?: boolean;
};
