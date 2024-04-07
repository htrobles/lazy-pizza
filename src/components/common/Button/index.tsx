import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import './Button.scss';

export default function Button({
  children,
  ...restProps
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button className='button' {...restProps}>
      {children}
    </button>
  );
}
