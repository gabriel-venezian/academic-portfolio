import React from 'react';
import { FooterComponent } from './styled';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterComponent>
      <div>
        <a>LOGO</a>
        <p>Desenvolvido por Gabriel Venezian, {currentYear}</p>
      </div>
    </FooterComponent>
  );
}
