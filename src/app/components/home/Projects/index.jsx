import React from 'react';
import { SectionTitle, CTA, ViewOnline } from '../../global';
import {
  ProjectsContainer,
  ProjectWrapper,
  ProjectInfo,
  ProjectCTAs,
  ProjectPreview,
  ProjectStack,
} from './styled';
import { projectsData } from './projectsData';
import Image from 'next/image';

export default function Projects() {
  const projects = projectsData;
  return (
    <>
      <SectionTitle id="projetos" title="Projetos" />
      <ProjectsContainer>
        {projects.map((project, projectIndex) => (
          <ProjectWrapper key={projectIndex}>
            <ProjectInfo>
              <h2 className="title">{project.title}</h2>
              <p>{project.paragraph1}</p>
              <p>{project.paragraph2}</p>
              <ProjectCTAs>
                <CTA url={project.caseStudyUrl} action="Estudo de Caso" />
                <CTA
                  url={project.prototypeUrl}
                  targetBlank={true}
                  action="Protótipo"
                />
                {project.githubUrl && (
                  <ViewOnline
                    link={project.githubUrl}
                    icon={'github'}
                    size="large"
                  />
                )}
              </ProjectCTAs>
            </ProjectInfo>
            <ProjectPreview>
              <Image
                src={project.previewImg}
                width={560}
                height={354}
                alt={project.title}
              />
              <ProjectStack>
                {project.stackIcons.map((stackIcon, indexStackIcon) => (
                  <div key={indexStackIcon}>{stackIcon}</div>
                ))}
              </ProjectStack>
            </ProjectPreview>
          </ProjectWrapper>
        ))}
      </ProjectsContainer>
    </>
  );
}
