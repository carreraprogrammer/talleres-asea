import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const resetOpacity = () => {
      if (window.scrollY < lastScrollY - 20) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    const handleScroll = () => {
      toggleVisibility();
      resetOpacity();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      scrollToTop();
    }
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      onKeyPress={handleKeyPress} // Agrega el event listener para tecla Enter
      role="button" // Agrega el atributo role
      tabIndex={0} // Agrega el atributo tabIndex para hacerlo focusable
    >
      <FaArrowCircleUp />
    </div>
  );
};

export default ScrollToTop;
