import React from 'react';
import { AiOutlineCloseCircle, AiOutlinePlus } from 'react-icons/ai';
import { RiSubtractFill } from 'react-icons/ri';
import { useSateContext } from '../context/ContextProvider';
import { cartData } from '../data/dummy';
import Button from './Button';

const Cart = () => {
  const { setIsClick, handleClick } = useSateContext();

  const handleClickOutSide = (e) => {
    if (e.target.contains(document.querySelector('.cart'))) {
      setIsClick((prev) => ({ ...prev, Cart: false }));
    }
  };
  return (
    <div
      onClick={handleClickOutSide}
      className='fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40'
    >
      <div className='w-400 bg-white fixed min-h-screen right-0 drop-shadow-sm py-10 px-6 dark:bg-secondary-dark-bg cart'>
        <div className='flex items-center justify-between text-lg'>
          <span className='font-semibold text-black dark:text-slate-200'>
            Shopping Cart
          </span>
          <div
            onClick={() =>
              setIsClick((prev) => ({ ...prev, Cart: false }))
            }
            className='w-10 h-10 cursor-pointer rounded-full hover:bg-slate-100 drop-shadow-md 
          flex items-center justify-center dark:text-slate-400'
          >
            <AiOutlineCloseCircle />
          </div>
        </div>

        <div className='mt-6'>
          {cartData.map((item, i) => (
            <div
              key={i}
              className='flex items-center gap-x-4 mb-4 pb-4 border-b-1'
            >
              <img
                className='w-24 h-20 rounded-lg'
                src={item.image}
                alt={item.name}
              />
              <div>
                <h4 className='text-lg capitalize font-semibold dark:text-slate-200'>
                  {item.name}
                </h4>
                <span className='text-slate-500 font-semibold dark:text-slate-400'>
                  {item.category}
                </span>
                <div className='flex items-center gap-x-4'>
                  <span className='dark:text-slate-200 font-semibold'>
                    {item.price}
                  </span>
                  <div className='border flex items-center rounded-md'>
                    <div className='px-1 cursor-pointer text-red-500'>
                      <AiOutlinePlus />
                    </div>
                    <div className='dark:text-slate-200 py-3 px-2 border-l border-r'>
                      0
                    </div>
                    <div className='px-1 cursor-pointer text-green-500'>
                      <RiSubtractFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mb-5'>
          <div className='flex items-center justify-between'>
            <span className='text-slate-400 dark:text-slate-200'>
              Sub Total
            </span>
            <span className='font-semibold dark:text-slate-300'>
              $890
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='text-slate-400 dark:text-slate-200'>
              Total
            </span>
            <span className='font-semibold dark:text-slate-300'>
              $890
            </span>
          </div>
        </div>

        <Button content='Place Order' />
      </div>
    </div>
  );
};

export default Cart;
