import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import ThemeToggle from './components/ThemeToggle';
import NameInput from './components/NameInput';
import GameRules from './components/GameRules';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [theme, setTheme] = useState(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  });

  const [greeting, setGreeting] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');
  const [userName, setUserName] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
      setTimeOfDay('day');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
      setTimeOfDay('day');
    } else {
      setGreeting('Good Evening');
      setTimeOfDay('night');
    }
  }, []);

  const handleNameSubmit = (name) => {
    setUserName(name);
    setIsNameSubmitted(true);
    setShowRules(true);
  };

  const handleBeginGame = () => {
    setShowRules(false);
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <AnimatePresence mode="wait">
          {!isNameSubmitted ? ( // <-- THIS LINE IS NOW FIXED
            <NameInput key="nameInput" onNameSubmit={handleNameSubmit} />
          ) : showRules ? (
            <GameRules key="rules" onBegin={handleBeginGame} />
          ) : (
            <div className="main-game-wrapper" key="mainGame">
              <Header 
                greeting={greeting} 
                timeOfDay={timeOfDay}
                userName={userName}
              />
              <Board />
            </div>
          )}
        </AnimatePresence>
      </div>
      {isNameSubmitted && <ThemeToggle theme={theme} setTheme={setTheme} />}
    </div>
  );
}

export default App;