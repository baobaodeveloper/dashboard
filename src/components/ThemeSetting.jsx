import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import { themeColors } from '../data/dummy';
import { useSateContext } from '../context/ContextProvider';

const ThemeSetting = () => {
  const {
    setShowSetting,
    theme,
    setTheme,
    currentColor,
    setCurrentColor,
  } = useSateContext();

  const handleCloseSetting = (e) => {
    if (
      !e.target.matches('.theme') &&
      e.target.contains(document.querySelector('.button-setting'))
    ) {
      setShowSetting((prev) => !prev);
    }
  };

  const handleChangeTheme = (value) => {
    setTheme(value);
  };

  const handleChangeCurrentColor = (value) => {
    setCurrentColor(value);
  };

  return (
    <div
      onClick={handleCloseSetting}
      className='fixed inset-0 bg-[rgba(0,0,0,0.4)] z-30 '
    >
      <div className='md:w-400 bg-white dark:bg-secondary-dark-bg absolute min-h-screen top-0 right-0  py-10 px-6 theme'>
        <div className='flex items-center justify-between text-lg mb-3 pb-3 border-b'>
          <span className='font-semibold text-black dark:text-slate-200'>
            Setting
          </span>
          <div
            onClick={() => setShowSetting(false)}
            className='w-10 h-10 cursor-pointer rounded-full hover:bg-slate-100 drop-shadow-md 
          flex items-center justify-center button-setting dark:text-slate-400'
          >
            <AiOutlineCloseCircle />
          </div>
        </div>

        <div className='mb-3 pb-3 border-b dark:text-slate-200'>
          <span className='text-lg font-bold mb-3 inline-block'>
            Theme Option
          </span>
          <div className='ml-3'>
            <div className='flex items-center gap-x-3 cursor-pointer mb-2'>
              <input
                className='cursor-pointer'
                onChange={() => handleChangeTheme('Light')}
                id='light'
                type='radio'
                value='Light'
                checked={theme === 'Light' ? true : false}
              />
              <label className='cursor-pointer' htmlFor='light'>
                Light
              </label>
            </div>
            <div className='flex items-center gap-x-3 cursor-pointer'>
              <input
                className='cursor-pointer'
                onChange={() => handleChangeTheme('Dark')}
                id='dark'
                type='radio'
                value='Dark'
                checked={theme === 'Dark' ? true : false}
              />
              <label className='cursor-pointer' htmlFor='dark'>
                Dark
              </label>
            </div>
          </div>
        </div>

        <div className='mb-3 pb-3 border-b dark:text-slate-200'>
          <span className='text-lg font-bold mb-3 inline-block'>
            Theme Colors
          </span>

          <div className='flex items-center gap-x-2'>
            {themeColors.map((item, i) => (
              <TooltipComponent
                key={i}
                content={item.name}
                position='TopCenter'
              >
                <div
                  onClick={() => handleChangeCurrentColor(item.color)}
                  style={{ backgroundColor: item.color }}
                  className='h-10 w-10 rounded-full cursor-pointer flex justify-center items-center'
                >
                  {currentColor === item.color && (
                    <BsCheck className='text-white text-3xl' />
                  )}
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSetting;
