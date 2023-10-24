import React from 'react';
import { WithLabel } from '../styled';

export default function IconFigma({ withLabel }) {
  const renderIcon = () => {
    return (
      <svg
        width="20"
        height="32"
        viewBox="0 0 20 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_28_147)">
          <path
            d="M5.00108 32C7.76052 32 10.0001 29.6107 10.0001 26.6667V21.3334H5.00108C2.24163 21.3334 0.0020752 23.7227 0.0020752 26.6667C0.0020752 29.6107 2.24163 32 5.00108 32Z"
            fill="#6D83F2"
          />
          <path
            d="M0.0020752 16C0.0020752 13.056 2.24163 10.6666 5.00108 10.6666H10.0001V21.3333H5.00108C2.24163 21.3333 0.0020752 18.944 0.0020752 16Z"
            fill="#6D83F2"
          />
          <path
            d="M0.00213623 5.33333C0.00213623 2.38933 2.24169 0 5.00114 0H10.0001V10.6667H5.00114C2.24169 10.6667 0.00213623 8.27733 0.00213623 5.33333Z"
            fill="#6D83F2"
          />
          <path
            d="M10 0H14.999C17.7584 0 19.998 2.38933 19.998 5.33333C19.998 8.27733 17.7584 10.6667 14.999 10.6667H10V0Z"
            fill="#6D83F2"
          />
          <path
            d="M19.998 16C19.998 18.944 17.7584 21.3333 14.999 21.3333C12.2396 21.3333 10 18.944 10 16C10 13.056 12.2396 10.6666 14.999 10.6666C17.7584 10.6666 19.998 13.056 19.998 16Z"
            fill="#6D83F2"
          />
        </g>
        <defs>
          <clipPath id="clip0_28_147">
            <rect width="20" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };

  if (withLabel) {
    return (
      <WithLabel>
        {renderIcon()}
        <label>Figma</label>
      </WithLabel>
    );
  }

  return renderIcon();
}
