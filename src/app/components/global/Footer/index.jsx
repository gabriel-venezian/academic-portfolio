import React from 'react';
import { FooterComponent } from './styled';
import Link from 'next/link';
import { IconLogo } from '../Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const currentYear = new Date().getFullYear();

  return (
    <FooterComponent>
      <div>
        <Link href="" onClick={scrollToTop}>
          <IconLogo footer={true} />
        </Link>
        <p>
          <span>Desenvolvido por</span> Gabriel Venezian, {currentYear}
        </p>
      </div>
    </FooterComponent>
  );
}
