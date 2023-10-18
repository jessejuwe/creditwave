'use client';

import React from 'react';

import './Card.scss';

type Props = { children: React.ReactNode; className?: string };

const Card: React.FC<Props> = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
