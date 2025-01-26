import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const StyledSection = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.colors.surface};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.secondary}
    );
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: ${props => props.theme.colors.secondary};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const AnimatedSection = ({ children, title, delay = 0 }) => {
  const { ref, controls, variants } = useScrollAnimation();
  const { theme } = useTheme();

  return (
    <StyledSection
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay
          }
        },
        hidden: {
          opacity: 0,
          y: 50
        }
      }}
      theme={theme}
    >
      {title && <h2>{title}</h2>}
      {children}
    </StyledSection>
  );
};

export default AnimatedSection; 