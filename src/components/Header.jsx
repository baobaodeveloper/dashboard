import React from 'react';

const Header = ({ content, title, className }) => {
  return (
    <div className='mb-6'>
      <span className='text-lg text-slate-400'>{title}</span>
      <p className={`text-3xl font-bold ${className}`}>{content}</p>
    </div>
  );
};

export default Header;
