import React from 'react';
import Button from './Button';
import { BsCurrencyDollar } from 'react-icons/bs';
import { earningData } from '../data/dummy';
import { useSateContext } from '../context/ContextProvider';

const Report = () => {
  const { currentColor } = useSateContext();
  return (
    <div className='2xl:flex justify-center gap-3 dark:text-slate-200'>
      <div
        className='flex 2xl:w-80 w-full 2xl:mb-0 mb-3 justify-between items-start p-3 pt-5 bg-white 
      dark:bg-secondary-dark-bg rounded-lg self-start'
      >
        <div className=' flex flex-col gap-2 items-start'>
          <span className='font-bold text-slate-400 '>Earnings</span>
          <span className='text-xl inline-block mb-4'>
            $63,448.78
          </span>

          <Button className='px-2' content='Download' />
        </div>

        <div
          style={{ backgroundColor: currentColor }}
          className='text-white  text-3xl w-14 h-14 rounded-full 
        flex justify-center items-center'
        >
          <BsCurrencyDollar />
        </div>
      </div>
      <div className='flex gap-3 flex-wrap justify-center'>
        {earningData.map((item, i) => (
          <div
            key={i}
            className='lg:w-56 w-40 bg-white dark:bg-secondary-dark-bg p-3 pt-5 rounded-lg flex flex-col items-center gap-3 text-center'
          >
            <div
              className='w-14 h-14 rounded-full flex items-center justify-center text-3xl'
              style={{
                color: item.iconColor,
                backgroundColor: item.iconBg,
              }}
            >
              {item.icon}
            </div>
            <div>
              <span className='text-lg font-bold inline-block mr-2'>
                {item.amount}
              </span>
              <span className={`text-sm text-${item.pcColor}`}>
                {item.percentage}
              </span>
              <p className='dark:text-slate-400 text-sx'>
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
