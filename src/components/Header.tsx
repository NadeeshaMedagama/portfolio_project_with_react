import { ThemeToggle } from './ThemeToggle';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold text-primary-light dark:text-primary-dark">
                        YourName
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                            About
                        </a>
                        <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                            Projects
                        </a>
                        <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                            Skills
                        </a>
                        <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                            Contact
                        </a>
                        <ThemeToggle />
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="ml-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                            aria-label="Menu"
                        >
                            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="md:hidden mt-4 pb-4 space-y-4">
                        <a
                            href="#about"
                            className="block text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="block text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </a>
                        <a
                            href="#skills"
                            className="block text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Skills
                        </a>
                        <a
                            href="#contact"
                            className="block text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
};