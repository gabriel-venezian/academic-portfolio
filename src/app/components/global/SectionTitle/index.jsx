import React from 'react';
import { SectionTitleStyles } from './styled';

export default function SectionTitle({ id, title }) {
  return <SectionTitleStyles id={id}>{title}</SectionTitleStyles>;
}
