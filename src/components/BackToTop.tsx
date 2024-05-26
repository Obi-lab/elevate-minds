"use client"
import { ArrowUpCircleIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from 'react';


const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset||window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="transition absolute bottom-1 right-1"
        >
          <ArrowUpCircleIcon className='h-10 w-10 rounded-full text-red-600 bg-white'/>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
