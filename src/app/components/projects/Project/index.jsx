'use client';
import React, { useEffect } from 'react';
import { Navbar, ViewOnline, CTA, Footer } from '../../global';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectWrapper,
  ProjectContent,
  ProjectSection,
  ProjectSectionTitle,
  ProjectStack,
  ProjectPreview,
  ProjectNavigation,
} from './styled';
import Link from 'next/link';
import Image from 'next/image';

export default function Project({ project }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    window.onpopstate = function () {
      window.location.reload();
    };
  }, []);

  return (
    <>
      <Navbar />
      <ProjectContainer>
        <ProjectHeader>
          <h1>{project.title}</h1>
          <div className="links">
            {project.links.github && (
              <ViewOnline
                link={project.links.github}
                icon="github"
                size="large"
              />
            )}
            <CTA
              url={project.links.prototype}
              targetBlank={true}
              action="Protótipo"
            />
          </div>
        </ProjectHeader>
        <ProjectWrapper>
          <ProjectContent>
            <ProjectSection>
              <ProjectSectionTitle>Contexto</ProjectSectionTitle>
              {project.context.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </ProjectSection>
            <ProjectSection>
              <ProjectSectionTitle>Funcionalidades</ProjectSectionTitle>
              {project.functionalities.map(
                (functionality, indexFunctionality) => (
                  <div className="functionality-list" key={indexFunctionality}>
                    <h3>{functionality.title}</h3>
                    <ul>
                      {functionality.list.map((listItem, listItemIndex) => (
                        <li key={listItemIndex}>{listItem}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </ProjectSection>
            <ProjectSection>
              <ProjectSectionTitle>Tecnologias utilizadas</ProjectSectionTitle>
              <ProjectStack>
                {project.stackIcons.map((icon, indexIcon) => (
                  <li key={indexIcon}>{icon}</li>
                ))}
              </ProjectStack>
            </ProjectSection>
          </ProjectContent>
          <ProjectPreview>
            {project.previewImgs.map((img, imgIndex) => (
              <Image
                key={imgIndex}
                src={img}
                width="auto"
                height="auto"
                alt={project.title}
              />
            ))}
          </ProjectPreview>
        </ProjectWrapper>
        <ProjectSectionTitle>Veja também</ProjectSectionTitle>
        <ProjectNavigation>
          {project.seeAlso.map((navigationItem, navigationItemIndex) => (
            <div className="navigationItem" key={navigationItemIndex}>
              <h4>{navigationItem.title}</h4>
              <Link href={navigationItem.url}>
                <Image
                  src={navigationItem.img}
                  width="auto"
                  height={'auto'}
                  alt={project.title}
                />
              </Link>
            </div>
          ))}
        </ProjectNavigation>
      </ProjectContainer>
      <Footer />
    </>
  );
}
