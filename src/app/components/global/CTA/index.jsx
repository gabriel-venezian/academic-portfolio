import React from 'react';
import Link from 'next/link';
import { StyledCTA } from './styled';

export default function CTA({ url, targetBlank, handleClick, action }) {
  const handleUrl = url ? url : '';
  const handleTarget = targetBlank ? '_blank' : '_self';

  return (
    <StyledCTA>
      <Link href={handleUrl} target={handleTarget} onClick={handleClick}>
        {action}
      </Link>
    </StyledCTA>
  );
}
