import React from 'react';
import { motion } from 'framer-motion';

const Square = ({ value, onSquareClick, isWinning }) => {
  const squareVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.button
      className={`square ${isWinning ? 'winning' : ''}`}
      onClick={onSquareClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {value && (
        <motion.span
          className={`player-${value}`}
          initial="hidden"
          animate="visible"
          variants={squareVariants}
        >
          {value}
        </motion.span>
      )}
    </motion.button>
  );
};

export default Square;