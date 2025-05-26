import { useTheme } from '../hooks/useTheme';
import { FiSun, FiMoon } from 'react-icons/fi';
import React from "react";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <FiMoon className="w-5 h-5 text-gray-800" />
            ) : (
                <FiSun className="w-5 h-5 text-yellow-300" />
            )}
        </button>
    );
};