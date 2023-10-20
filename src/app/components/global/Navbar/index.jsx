import React from 'react';
import { NavContainer, Nav, NavList } from './styled';
import ThemeSwitch from './ThemeSwitch/index';

export default function Navbar() {
  return (
    <NavContainer>
      <Nav>
        <a>LOGO</a>
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
