import React, { useContext } from 'react';
import ThemeContext from '../../../../context/ThemeContext';

export default function IconAngular() {
  const { theme } = useContext(ThemeContext);

  if (theme.light) {
    return (
      <svg
        width="30"
        height="32"
        viewBox="0 0 30 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8884 0L29.7768 5.30526L27.52 25.0105L14.8884 32L2.25684 25.0105L0 5.30526L14.8884 0ZM14.8884 3.53684L5.57474 24.4211H9.04421L10.9137 19.7389H18.8295L20.6989 24.4211H24.1516L14.8884 3.53684ZM17.6168 16.8421H12.1768L14.8884 10.3242L17.6168 16.8421Z"
          fill="#6D83F2"
        />
      </svg>
    );
  }
  return (
    <svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8884 0L29.7768 5.30526L27.52 25.0105L14.8884 32L2.25684 25.0105L0 5.30526L14.8884 0ZM14.8884 3.53684L5.57474 24.4211H9.04421L10.9137 19.7389H18.8295L20.6989 24.4211H24.1516L14.8884 3.53684ZM17.6168 16.8421H12.1768L14.8884 10.3242L17.6168 16.8421Z"
        fill="#6D83F2"
      />
    </svg>
  );
}
