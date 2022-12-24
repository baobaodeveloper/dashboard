import React from 'react';
import { FaShopify } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSateContext } from '../context/ContextProvider';
import { links } from '../data/dummy';

const Sidebar = () => {
  const { currentColor, screenSize, setShowSidebar, showSidebar } =
    useSateContext();
  const handleCloseSideBar = () => {
    if (showSidebar !== undefined && screenSize <= 900) {
      setShowSidebar(false);
    }
  };
  return (
    <div className='h-screen overflow-auto dark:text-slate-200 '>
      <NavLink
        to='/'
        className='flex items-center gap-3 text-xl font-bold '
      >
        <FaShopify />
        <span>Baobao</span>
      </NavLink>

      <div className='mt-10'>
        {links.map((item) => (
          <div key={item.title} className='py-3'>
            <div className='uppercase font-semibold text-gray-400'>
              {item.title}
            </div>
            <div>
              {item.links.map((item) => (
                <NavLink
                  onClick={handleCloseSideBar}
                  to={item.name}
                  key={item.name}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  })}
                  className={({ isActive }) =>
                    `${
                      isActive ? `text-white` : ''
                    } flex items-center gap-4 py-2 px-4 rounded-lg capitalize dark:hover:text-slate-500 hover:bg-slate-200`
                  }
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
