import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  block-size: 8rem;
  inline-size: 100%;
  background-color: ${(props) => props.theme.navBg};
  box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  inset-block-start: 0;
  z-index: 1;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  inline-size: 100%;
  max-block-size: 4rem;
  max-inline-size: 116rem;
  margin-inline: auto;
  color: ${(props) => props.theme.navItems};

  & > a {
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    margin-inline: 2rem;
    max-inline-size: calc(100% - 4rem);
  }
`;

export const NavList = styled.ul`
  display: flex;
  column-gap: 4rem;
  font-weight: 500;
  font-size: 2rem;

  li {
    position: relative;

    &:hover::after {
      content: '';
      position: absolute;
      block-size: 0.1rem;
      inline-size: 100%;
      background: ${(props) => props.theme.navItems};
      inset-block-end: -0.1rem;
      inset-inline: 0;
    }
  }

  @media (max-width: 718px) {
    display: none;
  }
`;
