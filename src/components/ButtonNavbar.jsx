import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const ButtonNavbar = ({ content, color = '', icon, handleClick }) => {
  return (
    <button type='button'>
      <TooltipComponent
        content={content}
        position='BottomCenter'
        style={{ color }}
      >
        <div
          onClick={() => handleClick(content)}
          className='text-2xl w-12 h-12 hover:bg-slate-200 dark:hover:bg-slate-50 transition-all
       rounded-full flex items-center justify-center'
        >
          {icon}
        </div>
      </TooltipComponent>
    </button>
  );
};

export default ButtonNavbar;
