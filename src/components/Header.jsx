import React from 'react';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

const Header = ({ greeting, timeOfDay, userName }) => {
  return (
    <header className="header">
      <div className="greeting-text">
        <h1>HI {userName.toUpperCase()}</h1>
        <p>{greeting}</p>
      </div>
      <div className="time-icon">
        {timeOfDay === 'day' ? <SunIcon /> : <MoonIcon />}
      </div>
    </header>
  );
};

export default Header;