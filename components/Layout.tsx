import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import EmailCopy from './EmailCopy';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // When route changes, snap to top immediately (bypass smooth scroll CSS)
    // to avoid the jarring effect of seeing the previous page scroll up.
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Circuit IQ', path: '/circuit-iq' },
  ];

  // If user clicks a link to the current page, scroll to top smoothly
  const handleScrollToTop = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-semibold tracking-tight z-50 hover:opacity-70 transition-opacity"
            onClick={() => handleScrollToTop('/')}
          >
            Charlie Yan
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-xs tracking-wide hover:text-gray-500 transition-colors ${location.pathname === '/' ? 'text-gray-900 font-medium' : 'text-gray-600'}`}
              onClick={() => handleScrollToTop('/')}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-wide hover:text-gray-500 transition-colors ${location.pathname === link.path ? 'text-gray-900 font-medium' : 'text-gray-600'}`}
                onClick={() => handleScrollToTop(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <Link
            to="/"
            className="text-2xl font-light tracking-tight"
            onClick={() => handleScrollToTop('/')}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-2xl font-light tracking-tight"
              onClick={() => handleScrollToTop(link.path)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Let's Create.</h3>
              <p className="text-gray-500 text-sm">Toronto, ON</p>
            </div>
            <div className="flex flex-col items-start md:items-end space-y-4">
              <EmailCopy
                email="charlieyan223@gmail.com"
                className="text-sm text-gray-900 hover:text-gray-600 flex items-center gap-2 transition-colors"
              >
                Email <ArrowRight size={14} />
              </EmailCopy>
              <a href="https://www.linkedin.com/in/charlieyan0203" target="_blank" rel="noreferrer" className="text-sm text-gray-900 hover:text-gray-600 flex items-center gap-2 transition-colors">
                LinkedIn <ArrowRight size={14} />
              </a>
              <Link
                to="/portfolio"
                className="text-sm text-gray-900 hover:text-gray-600 flex items-center gap-2 transition-colors"
                onClick={() => handleScrollToTop('/portfolio')}
              >
                View Portfolio <ArrowRight size={14} />
              </Link>
              <p className="text-xs text-gray-400 mt-8">© {new Date().getFullYear()} Charlie Yan.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;