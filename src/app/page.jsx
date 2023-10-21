'use client';
import React from 'react';
import { Navbar, Footer } from './components/global';
import { Certificates, ContactForm } from './components/home';

export default function AcademicPortfolio() {
  return (
    <>
      <Navbar />
      <Certificates />
      <ContactForm />
      <Footer />
    </>
  );
}
