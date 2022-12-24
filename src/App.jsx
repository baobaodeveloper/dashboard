import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from './pages';
import { Footer, Navbar, Sidebar, ThemeSetting } from './components';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useSateContext } from './context/ContextProvider';
import { AiFillSetting } from 'react-icons/ai';

const App = () => {
  const {
    showSetting,
    setShowSetting,
    setIsClick,
    showSidebar,
    setShowSidebar,
    screenSize,
    setScreenSize,
    theme,
    currentColor,
  } = useSateContext();

  const handleClickOutSide = (e) => {
    if (e.target.contains(document.querySelector('.chat'))) {
      setIsClick((prev) => ({ ...prev, Chat: false }));
    }
    if (e.target.contains(document.querySelector('.notification'))) {
      setIsClick((prev) => ({ ...prev, Notification: false }));
    }
    if (e.target.contains(document.querySelector('.user-profile'))) {
      setIsClick((prev) => ({ ...prev, UserProfile: false }));
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [screenSize]);

  return (
    <BrowserRouter>
      <div
        className={`relative w-screen overflow-hidden ${
          theme === 'Dark' ? 'dark' : ''
        }`}
      >
        <div
          style={{ backgroundColor: currentColor }}
          onClick={() => setShowSetting((prev) => !prev)}
          className='fixed z-30  w-14 h-14 rounded-full flex justify-center 
        items-center bottom-4 right-4 cursor-pointer'
        >
          <TooltipComponent content='Setting' position='TopCenter'>
            <AiFillSetting className='text-white text-4xl ' />
          </TooltipComponent>
        </div>
        {showSetting && <ThemeSetting />}

        {showSidebar && (
          <div className='w-72 sidebar fixed py-4 pl-6 pr-2 min-h-screen text-black bg-white dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        )}
        <div
          onClick={handleClickOutSide}
          className={`${
            showSidebar ? 'ml-72' : ''
          } bg-main-bg py-4 lg:px-8 px-4 dark:bg-main-dark-bg min-h-screen flex flex-col`}
        >
          <Navbar />

          <Routes>
            <Route path='/' element={<Ecommerce />} />
            <Route path='/ecommerce' element={<Ecommerce />} />

            {/* Pages */}
            <Route path='/orders' element={<Orders />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/customers' element={<Customers />} />

            {/* Apps */}
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/editor' element={<Editor />} />
            <Route path='/color-picker' element={<ColorPicker />} />

            {/* Chart */}
            <Route path='/line' element={<Line />} />
            <Route path='/area' element={<Area />} />
            <Route path='/bar' element={<Bar />} />
            <Route path='/Pie' element={<Pie />} />
            <Route path='/financial' element={<Financial />} />
            <Route path='/color-mapping' element={<ColorMapping />} />
            <Route path='/pyramid' element={<Pyramid />} />
            <Route path='/stacked' element={<Stacked />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
