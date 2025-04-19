
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`w-full py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 relative z-10">
          <div className="flex items-center">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <span className="text-xl ml-2 font-outfit font-semibold">
              <span className="gradient-text">Arch</span>
              <span className="dark:text-white">AI</span>
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${isActive('/') 
                ? 'text-primary' 
                : 'text-foreground/70 hover:text-foreground'}`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`font-medium transition-colors ${isActive('/features') 
                ? 'text-primary' 
                : 'text-foreground/70 hover:text-foreground'}`}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`font-medium transition-colors ${isActive('/pricing') 
                ? 'text-primary' 
                : 'text-foreground/70 hover:text-foreground'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${isActive('/about') 
                ? 'text-primary' 
                : 'text-foreground/70 hover:text-foreground'}`}
            >
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="outline" className="font-medium">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="btn-primary">Sign Up</Button>
            </Link>
          </div>
        </div>

        <button 
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="container-custom pt-20 pb-8 flex flex-col h-full">
          <nav className="flex flex-col space-y-6 flex-grow">
            <Link 
              to="/" 
              className={`text-xl font-medium py-2 ${isActive('/') ? 'text-primary' : 'text-foreground/80'}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`text-xl font-medium py-2 ${isActive('/features') ? 'text-primary' : 'text-foreground/80'}`}
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`text-xl font-medium py-2 ${isActive('/pricing') ? 'text-primary' : 'text-foreground/80'}`}
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`text-xl font-medium py-2 ${isActive('/about') ? 'text-primary' : 'text-foreground/80'}`}
              onClick={toggleMenu}
            >
              About
            </Link>
          </nav>
          <div className="pt-8 border-t border-border flex flex-col space-y-4">
            <Link to="/login" onClick={toggleMenu}>
              <Button variant="outline" className="w-full">Login</Button>
            </Link>
            <Link to="/signup" onClick={toggleMenu}>
              <Button className="w-full">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
