import React from 'react';
import { motion } from 'framer-motion';
import TrophyIcon from './icons/TrophyIcon';
import ThumbsDownIcon from './icons/ThumbsDownIcon';
import HandshakeIcon from './icons/HandshakeIcon';

// A small helper component for the mini tic-tac-toe boards
const MiniBoard = ({ state }) => (
  <div className="rule-board">
    {state.map((cell, i) => (
      <div key={i} className={`mini-square ${cell.winning ? 'mini-win' : ''}`}>
        {cell.val === 'X' && <span className="mini-x">X</span>}
        {cell.val === 'O' && <span className="mini-o">O</span>}
      </div>
    ))}
  </div>
);

const GameRules = ({ onBegin }) => {
  const rulesData = [
    {
      icon: <TrophyIcon />,
      title: 'WIN',
      description: 'Get 3 marks in a row, Player wins, game ends.',
      boardState: [
        {val:'O'}, {val:'O'}, {val:'X', winning: true},
        {val:''}, {val:'O'}, {val:'X', winning: true},
        {val:''}, {val:''}, {val:'X', winning: true},
      ]
    },
    {
      icon: <ThumbsDownIcon />,
      title: 'DEFEAT',
      description: 'Opponent gets 3 in a row, Player loses, game ends.',
      boardState: [
        {val:'O', winning: true}, {val:''}, {val:'X'},
        {val:'O', winning: true}, {val:''}, {val:'X'},
        {val:'O', winning: true}, {val:''}, {val:''},
      ]
    },
    {
      icon: <HandshakeIcon />,
      title: 'DRAW',
      description: 'Board full, no 3 in a row, No winner, game ends.',
      boardState: [
        {val:'X'}, {val:'X'}, {val:'O'},
        {val:'O'}, {val:'X'}, {val:'X'},
        {val:'X'}, {val:'O'}, {val:'O'},
      ]
    }
  ];

  return (
    <motion.div
      className="rules-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rules-content">
        <h1 className="rules-header">Game Rules</h1>
        <div className="rules-list">
          {rulesData.map((rule, index) => (
            <div className="rule-item" key={index}>
              <div className="rule-icon">{rule.icon}</div>
              <div className="rule-text">
                <h2>{rule.title}</h2>
                <p>{rule.description}</p>
              </div>
              <MiniBoard state={rule.boardState} />
            </div>
          ))}
        </div>
      </div>
      <button className="game-button begin-button" onClick={onBegin}>
        Begin
      </button>
    </motion.div>
  );
};

export default GameRules;