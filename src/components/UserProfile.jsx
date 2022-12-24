import React from 'react';
import { useSateContext } from '../context/ContextProvider';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { userProfileData } from '../data/dummy';
import Button from './Button';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { setIsClick } = useSateContext();

  return (
    <div className='absolute w-96 bg-white dark:bg-secondary-dark-bg shadow-md rounded-md top-11 p-4 px-6 right-0 user-profile z-20'>
      <div className='flex items-center justify-between text-lg'>
        <span className='font-semibold text-black dark:text-slate-200'>
          User Profile
        </span>
        <div
          onClick={() =>
            setIsClick((prev) => ({ ...prev, UserProfile: false }))
          }
          className='w-10 h-10 cursor-pointer rounded-full hover:bg-slate-100 drop-shadow-md 
          flex items-center justify-center dark:text-slate-400'
        >
          <AiOutlineCloseCircle />
        </div>
      </div>

      <div className='mt-10'>
        <div className='flex items-center gap-4 pb-6  border-b'>
          <img
            src={avatar}
            alt='avatar'
            className='w-24 h-24 rounded-full'
          />
          <div className='flex flex-col gap-1 '>
            <span className='font-semibold dark:text-slate-300 '>
              Michael Roberts
            </span>
            <span className='text-slate-400 dark:text-slate-200 text-sm'>
              Administrator
            </span>
            <span className='text-slate-600 font-semibold dark:text-slate-200 text-sm'>
              info@shop.com
            </span>
          </div>
        </div>
        {userProfileData.map((item, i) => (
          <div
            key={i}
            className='flex items-center gap-4 p-3 border-b dark:hover:bg-transparent hover:bg-slate-200 cursor-pointer mb-3'
          >
            <div
              className='p-3 text-lg rounded-lg'
              style={{
                color: item.iconColor,
                backgroundColor: item.iconBg,
              }}
            >
              {item.icon}
            </div>
            <div className='flex flex-col gap-1'>
              <span className='font-semibold dark:text-slate-300 text-base'>
                {item.title}
              </span>
              <span className='text-slate-400 dark:text-slate-200 text-sm'>
                {item.desc}
              </span>
            </div>
          </div>
        ))}

        <Button content='Logout' />
      </div>
    </div>
  );
};

export default UserProfile;
