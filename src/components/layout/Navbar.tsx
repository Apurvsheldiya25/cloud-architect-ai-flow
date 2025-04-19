import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 border-b border-white/10 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Arch AI
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="btn-primary">Sign Up</Button>
            </Link>
          </div>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/10 z-40">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="text-foreground/80 hover:text-foreground font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/features" className="text-foreground/80 hover:text-foreground font-medium py-2" onClick={toggleMenu}>Features</Link>
            <Link to="/pricing" className="text-foreground/80 hover:text-foreground font-medium py-2" onClick={toggleMenu}>Pricing</Link>
            <Link to="/about" className="text-foreground/80 hover:text-foreground font-medium py-2" onClick={toggleMenu}>About</Link>
            <div className="flex flex-col space-y-3 pt-2">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
