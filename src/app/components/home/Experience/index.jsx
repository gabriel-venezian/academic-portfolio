import React from 'react';
import { SectionTitle } from '../../global';
import {
  ExperienceContainer,
  ExperienceSection,
  ExperienceSectionTitle,
  ExperienceSectionInfo,
  ExperienceSectionStack,
} from './styled';
import { experiencesData, educationalData } from './experienceData';
import {
  IconHtml,
  IconCss,
  IconJavaScript,
  IconJquery,
  IconReact,
  IconAngular,
  IconGit,
  IconPhp,
  IconSql,
  IconFigma,
} from '../../global/Icons';

export default function Experience() {
  const experiences = experiencesData;
  const educationalInstitutions = educationalData;

  return (
    <ExperienceContainer id="experiencia">
      <ExperienceSection>
        <ExperienceSectionTitle>EXPERIÊNCIA</ExperienceSectionTitle>
        {experiences.map((experience, experienceIndex) => (
          <ExperienceSectionInfo key={experienceIndex}>
            <h2>{experience.title}</h2>
            <h3>{experience.location}</h3>
            <h4>{experience.period}</h4>
            <p>{experience.description}</p>
          </ExperienceSectionInfo>
        ))}
      </ExperienceSection>
      <ExperienceSection>
        <ExperienceSectionTitle>EDUCAÇÃO</ExperienceSectionTitle>
        {educationalInstitutions.map(
          (educationalInstitution, educationalInstitutionIndex) => (
            <ExperienceSectionInfo key={educationalInstitutionIndex}>
              <h2>{educationalInstitution.course}</h2>
              <h3>{educationalInstitution.name}</h3>
              <h4>{educationalInstitution.period}</h4>
            </ExperienceSectionInfo>
          )
        )}
        <ExperienceSectionTitle className="stack">
          TECNOLOGIAS
        </ExperienceSectionTitle>
        <ExperienceSectionStack>
          <IconHtml withLabel={true} />
          <IconCss withLabel={true} />
          <IconJavaScript withLabel={true} />
          <IconJquery withLabel={true} />
          <IconReact withLabel={true} />
          <IconAngular withLabel={true} />
          <IconGit withLabel={true} />
          <IconFigma withLabel={true} />
          <IconPhp withLabel={true} />
          <IconSql withLabel={true} />
        </ExperienceSectionStack>
      </ExperienceSection>
    </ExperienceContainer>
  );
}
