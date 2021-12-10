import React, { useEffect, useState } from 'react';
import './BackToTop.scss';

export const BackToTop = () => {
  const [active, setActive] = useState(false);
  const handleScroll = () => (
    window.pageYOffset > 100 ? setActive(true) : setActive(false)
  );
  let interval;
  const scrollStep = () => (
    window.pageYOffset === 0 ? clearInterval(interval) : window.scroll(0, window.pageYOffset - 50)
  ); // sscroll step in px = 30

  const scrollToTop = () => {
    interval = setInterval(scrollStep, 15); // delay in ms = 15
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <button type="button" onClick={() => scrollToTop()} className={active ? 'back-to-top-button back-to-top-button--active' : 'back-to-top-button'}>Top</button>
  );
};
