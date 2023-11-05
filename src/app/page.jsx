'use client';
import React, { useEffect } from 'react';
import { Navbar, Footer } from './components/global';
import {
  About,
  Experience,
  Hero,
  Projects,
  Certificates,
  ContactForm,
} from './components/home';

export default function AcademicPortfolio() {
  const fixScrollOffset = (url) => {
    const elementId = url.split('#')[1];
    const yOffset = -120;
    const element = document.getElementById(elementId);
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    const url = window.location.href;
    if (url.includes('#')) {
      fixScrollOffset(url);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <ContactForm />
      <Footer />
    </>
  );
}
