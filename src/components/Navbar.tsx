import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Nexora AI</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white px-3 py-2">Home</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white px-3 py-2">About</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white px-3 py-2">Products</a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300">About</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Projects</a>
          </div>
        </div>
      )}
    </nav>
  );
}