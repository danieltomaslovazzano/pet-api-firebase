// lib/context/theme-context.jsx
"use client";

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    colors: {
      primary: '#0f172a',  // slate-900
      secondary: '#475569', // slate-600
      accent: '#3b82f6',   // blue-500
      background: '#f8fafc', // slate-50
      text: '#0f172a',     // slate-900
    },
    fonts: {
      main: 'Inter, sans-serif',
      headings: 'Inter, sans-serif',
    },
    radii: {
      button: 6,
      card: 8,
      input: 4,
    },
    spacing: {
      buttonX: 16,
      buttonY: 8,
      section: 24,
      content: 16,
    }
  });

  // Cargar tema guardado al iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem('adminTheme');
    if (savedTheme) {
      try {
        setTheme(JSON.parse(savedTheme));
      } catch (e) {
        console.error('Error parsing saved theme', e);
      }
    }
  }, []);

  // Actualizar variables CSS cuando cambie el tema
  useEffect(() => {
    const root = document.documentElement;
    
    // Colores
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-accent', theme.colors.accent);
    root.style.setProperty('--color-background', theme.colors.background);
    root.style.setProperty('--color-text', theme.colors.text);
    
    // Fuentes
    root.style.setProperty('--font-main', theme.fonts.main);
    root.style.setProperty('--font-headings', theme.fonts.headings);
    
    // Radios
    root.style.setProperty('--radius-button', `${theme.radii.button}px`);
    root.style.setProperty('--radius-card', `${theme.radii.card}px`);
    root.style.setProperty('--radius-input', `${theme.radii.input}px`);
    
    // Espaciado
    root.style.setProperty('--spacing-button-x', `${theme.spacing.buttonX}px`);
    root.style.setProperty('--spacing-button-y', `${theme.spacing.buttonY}px`);
    root.style.setProperty('--spacing-section', `${theme.spacing.section}px`);
    root.style.setProperty('--spacing-content', `${theme.spacing.content}px`);
    
  }, [theme]);

  const updateTheme = (path, value) => {
    setTheme(prevTheme => {
      // Actualizar propiedad anidada
      const newTheme = { ...prevTheme };
      const keys = path.split('.');
      let current = newTheme;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      
      // Guardar en localStorage
      localStorage.setItem('adminTheme', JSON.stringify(newTheme));
      
      return newTheme;
    });
  };

  const resetTheme = () => {
    const defaultTheme = {
      colors: {
        primary: '#0f172a',
        secondary: '#475569',
        accent: '#3b82f6',
        background: '#f8fafc',
        text: '#0f172a',
      },
      fonts: {
        main: 'Inter, sans-serif',
        headings: 'Inter, sans-serif',
      },
      radii: {
        button: 6,
        card: 8,
        input: 4,
      },
      spacing: {
        buttonX: 16,
        buttonY: 8,
        section: 24,
        content: 16,
      }
    };
    
    setTheme(defaultTheme);
    localStorage.setItem('adminTheme', JSON.stringify(defaultTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);