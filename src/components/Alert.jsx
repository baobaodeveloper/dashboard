import React from 'react';
import { useSateContext } from '../context/ContextProvider';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { chatData } from '../data/dummy';
import Button from './Button';

const Alert = () => {
  const { setIsClick } = useSateContext();

  return (
    <div className='absolute w-96 bg-white dark:bg-secondary-dark-bg shadow-md rounded-md p-4 right-0 notification z-20'>
      <div className='flex items-center justify-between text-lg'>
        <span className='font-semibold text-black dark:text-slate-200'>
          Notification
        </span>
        <div
          onClick={() =>
            setIsClick((prev) => ({ ...prev, Notification: false }))
          }
          className='w-10 h-10 cursor-pointer rounded-full hover:bg-slate-100 drop-shadow-md 
          flex items-center justify-center dark:text-slate-400'
        >
          <AiOutlineCloseCircle />
        </div>
      </div>

      <div className='mt-10'>
        {chatData.map((item, i) => (
          <div
            key={i}
            className='flex items-center gap-2 mb-3 pb-3 border-b'
          >
            <img
              src={item.image}
              alt={item.message}
              className='w-10 h-10 rounded-full'
            />
            <div className='flex flex-col gap-1'>
              <span className='font-semibold dark:text-slate-300'>
                {item.message}
              </span>
              <span className='text-slate-400 dark:text-slate-200 text-sm'>
                {item.desc}
              </span>
            </div>
          </div>
        ))}

        <Button content='See all messages' />
      </div>
    </div>
  );
};

export default Alert;
