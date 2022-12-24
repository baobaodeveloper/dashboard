import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import { FaAngleDown } from 'react-icons/fa';
import ButtonNavbar from './ButtonNavbar';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useSateContext } from '../context/ContextProvider';
import avatar from '../data/avatar.jpg';
import Cart from './Cart';
import Chat from './Chat';
import Alert from './Alert';
import UserProfile from './UserProfile';

const Navbar = () => {
  const { handleClick, isClick, currentColor } = useSateContext();

  return (
    <div>
      {isClick.Cart && <Cart />}

      <div className='flex justify-between items-center w-full'>
        <ButtonNavbar
          handleClick={handleClick}
          content='Menu'
          color={currentColor}
          icon={<GiHamburgerMenu />}
        />

        <div className='flex items-center'>
          <ButtonNavbar
            handleClick={handleClick}
            content='Cart'
            color={currentColor}
            icon={<AiOutlineShoppingCart />}
          />
          <div className='relative'>
            <ButtonNavbar
              handleClick={handleClick}
              content='Chat'
              color={currentColor}
              icon={<BiMessage />}
            />
            <span className='absolute w-2 h-2 rounded-full bg-green-600 top-3 right-3'></span>
            {isClick.Chat && <Chat />}
          </div>

          <div className='relative'>
            <ButtonNavbar
              handleClick={handleClick}
              content='Notification'
              color={currentColor}
              icon={<BsBell />}
            />
            <span className='absolute w-2 h-2 rounded-full bg-yellow-600 top-3 right-3'></span>
            {isClick.Notification && <Alert />}
          </div>

          <div className='relative'>
            <div
              onClick={() => handleClick('UserProfile')}
              className='cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-50 transition-all
       rounded-full flex items-center justify-center py-1 px-2 '
            >
              <TooltipComponent
                content='UserProfile'
                position='BottomCenter'
              >
                <div className='flex items-center text-xs gap-x-1 dark:text-slate-200 dark:hover:text-slate-400'>
                  <img
                    className='w-7 h-7 rounded-full'
                    src={avatar}
                    alt='avatar'
                  />
                  <span>Hi,</span>
                  <p className='font-semibold'>Baobao</p>
                  <FaAngleDown />
                </div>
              </TooltipComponent>
            </div>
            {isClick.UserProfile && <UserProfile />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
