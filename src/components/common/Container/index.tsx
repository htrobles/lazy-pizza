import React, { HTMLAttributes, PropsWithChildren } from 'react';
import './Container.scss';

export default function Container({
  children,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <div className='container'>{children}</div>;
}
