import React from 'react';
import { useSateContext } from '../context/ContextProvider';

const Button = ({ content, className }) => {
  const { currentColor } = useSateContext();
  return (
    <div
      style={{ backgroundColor: currentColor }}
      className={`rounded-lg text-center text-white py-2 cursor-pointer hover:drop-shadow-lg transition-all ${className}`}
    >
      {content}
    </div>
  );
};

export default Button;
