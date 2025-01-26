import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: '/images/hero/project1.jpg',
    title: 'Building Excellence Since 2000',
    description: 'Leading the construction industry with innovation and quality',
  },
  {
    id: 2,
    image: '/images/hero/project2.jpg',
    title: 'Modern Construction Solutions',
    description: 'State-of-the-art technology meets expert craftsmanship',
  },
  {
    id: 3,
    image: '/images/hero/project3.jpg',
    title: 'Building Your Vision',
    description: 'From concept to completion, we bring your dreams to life',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <StyledHeroSlider
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode='wait'>
        <Slide
          key={slides[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title}
            loading="eager"
          />
          <SlideContent>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slides[currentSlide].description}
            </motion.p>
          </SlideContent>
        </Slide>
      </AnimatePresence>

      <SlideControls>
        <SlideButton onClick={handlePrevSlide}>
          <i className="fas fa-chevron-left"></i>
        </SlideButton>
        <Dots>
          {slides.map((_, index) => (
            <Dot
              key={index}
              active={index === currentSlide}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
            />
          ))}
        </Dots>
        <SlideButton onClick={handleNextSlide}>
          <i className="fas fa-chevron-right"></i>
        </SlideButton>
      </SlideControls>
    </StyledHeroSlider>
  );
};

const StyledHeroSlider = styled.section`
  position: relative;
  height: 600px;
  overflow: hidden;
  background-color: var(--primary-color);
`;

const Slide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5));
  }
`;

const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
  width: 80%;
  max-width: 800px;

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }

  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  }
`;

const SlideControls = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 2;
`;

const SlideButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 10px;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
  }
`;

export default HeroSlider; 