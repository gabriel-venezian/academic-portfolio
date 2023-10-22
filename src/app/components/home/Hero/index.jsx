import React, { useContext } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import {
  HeroContainer,
  HeroContent,
  HeroInformation,
  HeroInformationWrapper,
  HeroDecoration,
  HeroDecorationClass,
  HeroDecorationPalette,
} from './styled';
import Image from 'next/image';
import sideDecoration from '../../../../../public/home/hero/side-decoration.svg';
import { CTA, SocialMedia } from '../../global';
import lightPalette from '../../../../../public/home/hero/light-palette.svg';
import darkPalette from '../../../../../public/home/hero/dark-palette.svg';

export default function Hero() {
  const { theme } = useContext(ThemeContext);
  const handleThemePalette = () => {
    if (theme.light) {
      return lightPalette;
    }
    return darkPalette;
  };
  const themePalette = handleThemePalette();

  return (
    <HeroContainer>
      <Image src={sideDecoration} alt="" />
      <HeroContent>
        <HeroInformation>
          <HeroInformationWrapper>
            <p className="paragraph">Olá, sou</p>
            <h1>GABRIEL VENEZIAN</h1>
            <h2>DESENVOLVEDOR FRONT-END</h2>
          </HeroInformationWrapper>
          <CTA action="Download Currículo" />
          <SocialMedia heroSection={true} />
        </HeroInformation>
        <HeroDecoration>
          {/* prettier-ignore */}
          <HeroDecorationClass>
            <pre>1  class <b>Person</b> &#123;</pre>
            <pre>2    constructor() &#123;</pre>
            <pre>3      this.name = “<strong>Gabriel Venezian</strong>”;</pre>
            <pre>4      this.traits = [“<b>Front-end</b>”, “<b>Developer</b>”];</pre>
            <pre>5      this.age = new Date().getFullYear() - 1998;</pre>
            <pre>6    &#125;</pre>
            <pre>7  &#125;</pre>
          </HeroDecorationClass>
          <HeroDecorationPalette>
            <Image
              src={themePalette}
              width={'auto'}
              height={'auto'}
              alt={theme.light ? 'Paleta Clara' : 'Paleta Escura'}
            />
          </HeroDecorationPalette>
        </HeroDecoration>
      </HeroContent>
    </HeroContainer>
  );
}
