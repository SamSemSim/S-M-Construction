import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
  }

  .icon {
    position: absolute;
    transition: all 0.3s ease;
  }

  .sun {
    opacity: ${props => props.theme.isDarkMode ? 1 : 0};
    transform: ${props => props.theme.isDarkMode ? 'rotate(0deg)' : 'rotate(90deg)'};
  }

  .moon {
    opacity: ${props => props.theme.isDarkMode ? 0 : 1};
    transform: ${props => props.theme.isDarkMode ? 'rotate(-90deg)' : 'rotate(0deg)'};
  }
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      theme={theme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <FontAwesomeIcon icon={faSun} className="icon sun" />
      <FontAwesomeIcon icon={faMoon} className="icon moon" />
    </ToggleButton>
  );
};

export default ThemeToggle; 