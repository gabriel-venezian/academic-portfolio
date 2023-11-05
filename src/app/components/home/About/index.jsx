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
      <AboutContainerDecorationBg />
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
          <p>
            Desenvolvedor Front-end apaixonado por tecnologia. Conheci
            programação aos 11 anos, e desde então minha vida mudou.
          </p>
          <p>Amo jogos, livros, músicas, animes e um bom café.</p>
          <p>
            Trabalho com a criação e desenvolvimento de interfaces, correção de
            erros e bugs visuais, além do aprimoramento de interfaces baseado em
            feedbacks.
          </p>
          <p>
            Estou no 6º Semestre de Sistemas para Internet, tecnólogo
            disponibilizado pela Fatec Araras, e minha previsão de formatura é
            dezembro de 2023.
          </p>
        </AboutText>
      </AboutWrapper>
    </AboutContainer>
  );
}
