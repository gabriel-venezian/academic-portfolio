'use client';
import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const lightTheme = {
    light: true,
    navBg: '#F8F8F8',
    bodyBg: '#F8F8F8',
    defaultFontColor: '#383838',
    navItems: '#6D83F2',
    switchBg: '#C7D0FF',

    sectionTitle: '#6D83F2',

    certificateBorder: '#E5E5E5',
    certificateInfoBg: '#fff',
    certificateInfoBorder: '#E5E5E5',
    contactWrapper: '#fff',
    contactInfo: 'linear-gradient(180deg, #6A98F0 0%, #4961DC 100%)',
    contactInputBg: '#F7F7F7',
    contactInputBorder: '#EDEDED',
    footerBg:
      'linear-gradient(90deg, #6A98F0 0%, rgba(73, 97, 220, 0.99) 100%)',
  };

  const darkTheme = {
    light: false,
    navBg: '#232323',
    bodyBg: '#181818',
    defaultFontColor: '#F8F8F8',
    navItems: '#F8F8F8',

    sectionTitle: '#F8F8F8',

    certificateBorder: '#181818',
    certificateInfoBg: '#232323',
    certificateInfoBorder: '#232323',
    contactWrapper: '#303030',
    contactInfo: '#232323',
    contactInputBg: '#fff',
    contactInputBorder: '#fff',
    footerBg: '#232323',
  };

  const toggleTheme = (event) => {
    event.preventDefault();
    setIsDarkTheme((prevTheme) => {
      return !prevTheme;
    });
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
