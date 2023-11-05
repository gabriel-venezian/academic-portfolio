'use client';
import React from 'react';
import { NavContainer, Nav, NavList } from './styled';
import { IconLogo } from '../Icons';
import ThemeSwitch from './ThemeSwitch/index';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const handleLogoClick = () => window.scrollTo(0, 0);
  const router = useRouter();

  const fixScrollOffset = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const yOffset = -120;
    try {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      history.pushState(null, null, `#${id}`);
      return window.scrollTo({ top: y });
    } catch {
      return router.push(`/#${id}`);
    }
  };

  return (
    <>
      <NavContainer>
        <Nav>
          <Link onClick={handleLogoClick} href={'/'}>
            <IconLogo />
          </Link>
          <NavList>
            <li>
              <Link href="/#sobre" onClick={(e) => fixScrollOffset(e, 'sobre')}>
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/#experiencia"
                onClick={(e) => fixScrollOffset(e, 'experiencia')}
              >
                Experiência
              </Link>
            </li>
            <li>
              <Link
                href="/#projetos"
                onClick={(e) => fixScrollOffset(e, 'projetos')}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/#certificados"
                onClick={(e) => fixScrollOffset(e, 'certificados')}
              >
                Certificados
              </Link>
            </li>
            <li>
              <Link
                href="/#contato"
                onClick={(e) => fixScrollOffset(e, 'contato')}
              >
                Contato
              </Link>
            </li>
          </NavList>
          <ThemeSwitch />
        </Nav>
      </NavContainer>
    </>
  );
}
