import React from 'react';
import { NavContainer, Nav, NavList } from './styled';
import { IconLogo } from '../Icons';
import ThemeSwitch from './ThemeSwitch/index';

export default function Navbar() {
  const handleLogoClick = () => window.scrollTo(0, 0);
  return (
    <NavContainer>
      <Nav>
        <a onClick={handleLogoClick}>
          <IconLogo />
        </a>
        <NavList>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#experiencia">Experiência</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#certificados">Certificados</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </NavList>
        <ThemeSwitch />
      </Nav>
    </NavContainer>
  );
}
