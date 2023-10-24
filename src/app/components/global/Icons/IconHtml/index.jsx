import React from 'react';
import { WithLabel } from '../styled';

export default function IconHtml({ withLabel }) {
  const renderIcon = () => {
    return (
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0L2.49286 28.2714L13.6786 32L24.9357 28.2714L27.4286 0H0ZM22.0143 9.13571H8.88571L9.17857 12.6643H21.7214L20.75 23.2643L13.7571 25.1929V25.2143H13.6786L6.62857 23.2643L6.2 17.85H9.60714L9.85714 20.5714L13.6786 21.6071L17.5143 20.5714L17.9429 16.1286H6.02143L5.10714 5.72857H22.3286L22.0143 9.13571Z"
          fill="#6D83F2"
        />
      </svg>
    );
  };

  if (withLabel) {
    return (
      <WithLabel>
        {renderIcon()}
        <label>HTML</label>
      </WithLabel>
    );
  }

  return renderIcon();
}
