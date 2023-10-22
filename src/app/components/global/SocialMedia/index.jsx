import React from 'react';
import { SocialMediaComponent } from './styled';
import { IconGitHub, IconHackerRank, IconLinkedIn } from '../Icons';

export default function SocialMedia({ heroSection }) {
  return (
    <SocialMediaComponent>
      <a href="https://github.com/gabriel-venezian" target="_blank">
        <IconGitHub heroSection={heroSection} />
      </a>
      <a
        href="https://www.hackerrank.com/profile/gabriel_venezian"
        target="_blank"
      >
        <IconHackerRank heroSection={heroSection} />
      </a>
      <a href="https://www.linkedin.com/in/gabriel-venezian/" target="_blank">
        <IconLinkedIn heroSection={heroSection} />
      </a>
    </SocialMediaComponent>
  );
}
