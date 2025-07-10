import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Square from './Square';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return { winner: null, line: [] };
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  const { winner, line: winningLine } = calculateWinner(squares);
  const isDraw = squares.every(square => square !== null) && !winner;

  const handleClick = (i) => {
    if (!gameStarted || squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleGameAction = () => {
    if (gameStarted) { // "Leave" button was clicked
      setSquares(Array(9).fill(null));
      setXIsNext(true);
      setGameStarted(false); // Go back to start screen
    } else { // "Start" button was clicked
      setGameStarted(true);
    }
  };
  
  const handleNewGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStarted(true);
  };

  let statusMessage;
  if (winner) {
    statusMessage = `Winner is ${winner}`;
  } else if (isDraw) {
    statusMessage = "It's a Draw!";
  }

  return (
    <div className="board-container">
      <div className="game-status">
        <AnimatePresence>
          {statusMessage && (
            <motion.p
              key="status"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {statusMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      
      <AnimatePresence>
        {gameStarted && (
          <motion.div
            className="board"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            {squares.map((square, i) => (
              <Square
                key={i}
                value={square}
                onSquareClick={() => handleClick(i)}
                isWinning={winningLine.includes(i)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {!gameStarted && (
        <button className="game-button start-button" onClick={handleGameAction}>
          Start Game
        </button>
      )}

      {gameStarted && !winner && !isDraw && (
        <button className="game-button mobile-only leave-button" onClick={handleGameAction}>
          Leave
        </button>
      )}

      {(winner || isDraw) && (
        <button className="game-button new-game-button" onClick={handleNewGame}>
          New Game
        </button>
      )}
    </div>
  );
};
export default Board;