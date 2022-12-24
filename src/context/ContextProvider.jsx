import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const StateContext = createContext();
const initialState = {
  Chat: false,
  Cart: false,
  UserProfile: false,
  Notification: false,
};

export const ContextProvider = ({ children }) => {
  const [isClick, setIsClick] = useState(initialState);
  const [showSidebar, setShowSidebar] = useState(true);
  const [screenSize, setScreenSize] = useState('');
  const [showSetting, setShowSetting] = useState(false);
  const [currentColor, setCurrentColor] = useState(
    localStorage.getItem('color') || '#1A97F5'
  );
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'Light'
  );

  const handleClick = (click) => {
    if (click === 'Menu') {
      setShowSidebar((prev) => !prev);
    }
    setIsClick({
      Chat: false,
      Cart: false,
      UserProfile: false,
      Notification: false,
      [click]: true,
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  useEffect(() => {
    localStorage.setItem('color', currentColor);
  }, [currentColor]);

  return (
    <StateContext.Provider
      value={{
        handleClick,
        isClick,
        setIsClick,
        showSidebar,
        setShowSidebar,
        screenSize,
        setScreenSize,
        showSetting,
        setShowSetting,
        theme,
        setTheme,
        currentColor,
        setCurrentColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useSateContext = () => useContext(StateContext);
