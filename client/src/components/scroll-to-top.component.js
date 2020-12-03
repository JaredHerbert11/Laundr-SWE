//copied from https://stackoverflow.com/questions/58598637/why-react-new-page-render-from-the-bottom-of-the-screen
import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;