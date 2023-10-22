'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
	box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font: 400 1.6rem/2.4rem 'Fira Sans', 'Arial', 'sans-serif' !important;
    color: ${(props) => props.theme.defaultFontColor};
    background-color: ${(props) => props.theme.bodyBg};
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  p,
  blockquote,
  dd {
    margin-inline: 0;
    margin-block: 0;
    padding-inline: 0;
    padding-block: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input:focus {
    outline: none;
  }

  img {
    max-inline-size: 100%;
    block-size: auto;
    display: block;
  }
`;

export default GlobalStyles;
