import React from 'react'
import { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(flase);
  const [scrolled, setScrolled] = useState(false);
  const logoPath = "/yak-logo.png";

  useEffect (() =>  {
    const handeScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handeScroll);
    return () => window.removeEventListener('scroll', handeScroll);
  }, []);

  return (
    <div class='min-h-screen bg-white'>
      <nav class={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-4">
            <div class="flex items-center">
              <img src={logoPath} alt='logo' class='h-40 w-auto'/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default App
