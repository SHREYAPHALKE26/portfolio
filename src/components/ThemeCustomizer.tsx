import React, { useState } from 'react';
import { Palette, X, Check } from 'lucide-react';

interface ThemeCustomizerProps {
  onThemeChange: (theme: string) => void;
}

const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('default');

  const themes = [
    { name: 'default', primary: '#14b8a6', secondary: '#3b82f6', label: 'Teal & Blue' },
    { name: 'purple', primary: '#8b5cf6', secondary: '#ec4899', label: 'Purple & Pink' },
    { name: 'orange', primary: '#f97316', secondary: '#ef4444', label: 'Orange & Red' },
    { name: 'green', primary: '#10b981', secondary: '#06b6d4', label: 'Green & Cyan' },
    { name: 'indigo', primary: '#6366f1', secondary: '#8b5cf6', label: 'Indigo & Violet' },
  ];

  const handleThemeSelect = (theme: any) => {
    setSelectedTheme(theme.name);
    onThemeChange(theme.name);
    
    // Apply CSS custom properties
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-6 bottom-6 z-50 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700"
      >
        <Palette className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Customize Theme
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-3">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeSelect(theme)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all duration-200 ${
                    selectedTheme === theme.name
                      ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.primary }}
                      />
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.secondary }}
                      />
                    </div>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {theme.label}
                    </span>
                  </div>
                  {selectedTheme === theme.name && (
                    <Check className="h-5 w-5 text-teal-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThemeCustomizer;