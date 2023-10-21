import React from 'react';
import { SocialMediaComponent } from './styled';
import { IconGitHub, IconHackerRank, IconLinkedIn } from '../Icons';

export default function SocialMedia() {
  return (
    <SocialMediaComponent>
      <a href="https://github.com/gabriel-venezian" target="_blank">
        <IconGitHub />
      </a>
      <a
        href="https://www.hackerrank.com/profile/gabriel_venezian"
        target="_blank"
      >
        <IconHackerRank />
      </a>
      <a href="https://www.linkedin.com/in/gabriel-venezian/" target="_blank">
        <IconLinkedIn />
      </a>
    </SocialMediaComponent>
  );
}
