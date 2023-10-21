import React from 'react';
import { ViewOnlineWrapper } from './styled';
import { IconGitHub, IconWeb } from '../Icons';

export default function ViewOnline({ icon, link, size }) {
  return (
    <ViewOnlineWrapper href={link} size={size} target="_blank">
      {icon === 'github' ? <IconGitHub viewOnline={true} /> : <IconWeb />}
    </ViewOnlineWrapper>
  );
}
