import React from 'react';
import { Fira_Sans, Fira_Code } from 'next/font/google';
import StyledComponentsRegistry from './registry';
import { ThemeContextProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';

const firaSans = Fira_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const firaCode = Fira_Code({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Gabriel Venezian - Portfólio Acadêmico',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${firaSans.className} ${firaCode.className}`}>
        <StyledComponentsRegistry>
          <ThemeContextProvider>
            <GlobalStyles />
            {children}
          </ThemeContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
