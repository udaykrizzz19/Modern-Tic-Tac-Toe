import React from 'react';
import { motion } from 'framer-motion';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-toggle-container">
      <div className={`theme-toggle ${theme}`} onClick={toggleTheme}>
        <motion.div className="toggle-slider" layout transition={{ type: 'spring', stiffness: 700, damping: 30 }}>
          {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </motion.div>
      </div>
    </div>
  );
};

export default ThemeToggle;