'use client';
import React from 'react';
import { Navbar, Footer } from './components/global';
import { Projects, Certificates, ContactForm } from './components/home';

export default function AcademicPortfolio() {
  return (
    <>
      <Navbar />
      <Projects />
      <Certificates />
      <ContactForm />
      <Footer />
    </>
  );
}
