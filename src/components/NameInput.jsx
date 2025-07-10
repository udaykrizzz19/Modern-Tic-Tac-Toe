import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

const NameInput = ({ onNameSubmit }) => {
  const [name, setName] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptcha = (value) => {
    if (value) setCaptchaVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
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

        {/* reCAPTCHA Component - CHANGED LINE BELOW */}
        <div className="recaptcha-container">
          <ReCAPTCHA
            sitekey="6LdDPH4rAAAAACnwxQ90yvCMrjRxfaUO9yBtR7VG"
            onChange={handleCaptcha}
          />
        </div>

        <button type="submit" className="game-button">Continue</button>
      </form>
    </motion.div>
  );
};

export default NameInput;