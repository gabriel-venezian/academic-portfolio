'use client';
import React, { useContext } from 'react';
import { Navbar, Footer } from './components/global';
import { ContactForm } from './components/home';
import ThemeContext from './context/ThemeContext';

export default function AcademicPortfolio() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <ContactForm theme={theme} />
      <Footer />
    </>
  );
}
