import React from 'react';
import { FooterComponent } from './styled';
import { IconLogo } from '../Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterComponent>
      <div>
        <IconLogo footer={true} />
        <p>
          <span>Desenvolvido por</span> Gabriel Venezian, {currentYear}
        </p>
      </div>
    </FooterComponent>
  );
}
