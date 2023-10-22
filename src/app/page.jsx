'use client';
import React from 'react';
import { Navbar, Footer } from './components/global';
import { Hero, Projects, Certificates, ContactForm } from './components/home';

export default function AcademicPortfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Certificates />
      <ContactForm />
      <Footer />
    </>
  );
}
