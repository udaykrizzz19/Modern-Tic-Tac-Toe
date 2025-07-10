import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NameInput = ({ onNameSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
    }
  };

  return (
    <motion.div
      className="name-input-container"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit}>
        <h1>Welcome!</h1>
        <p>Please enter your name to begin.</p>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoFocus
        />
        <button type="submit" className="game-button">Continue</button>
      </form>
    </motion.div>
  );
};

export default NameInput;