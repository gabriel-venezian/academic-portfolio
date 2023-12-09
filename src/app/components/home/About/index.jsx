import React from 'react';
import {
  AboutContainer,
  AboutContainerDecorationBg,
  AboutWrapper,
  AboutImage,
  AboutText,
} from './styled';
import Image from 'next/image';
import aboutPicture from '../../../../../public/home/about/about-picture.jpg';

export default function About() {
  return (
    <AboutContainer id="sobre">
      <AboutContainerDecorationBg>
        <AboutWrapper>
          <AboutImage>
            <Image
              src={aboutPicture}
              width={'auto'}
              height={'auto'}
              alt="Gabriel Venezian"
            />
          </AboutImage>
          <AboutText>
            <p>Olá! Sou Gabriel Venezian.</p>
            <p>Desenvolvedor Front-end apaixonado por tecnologia.</p>
            <p>
              Conheci a programação aos 11 anos, e desde então minha vida mudou.
            </p>
            <p>Amo jogos, músicas, animes e um bom café.</p>
            <p>
              Trabalho com a criação e desenvolvimento de sites e aplicações.
            </p>
            <p>
              Atualmente curso o Tecnólogo em Sistemas para Internet na FATEC
              Araras.
            </p>
          </AboutText>
        </AboutWrapper>
      </AboutContainerDecorationBg>
    </AboutContainer>
  );
}
