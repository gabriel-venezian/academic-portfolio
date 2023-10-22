import React, { useContext } from 'react';
import ThemeContext from '../../../../context/ThemeContext';

export default function IconLogo() {
  const { theme } = useContext(ThemeContext);

  if (theme.light) {
    return (
      <svg
        width="30"
        height="40"
        viewBox="0 0 30 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 40C7.04791 33.698 30.3563 38.9173 29.659 21.6716C23.1418 33.0567 1.35504 28.2781 0 40ZM0.948075 34.7807C7.45782 27.0447 33.2087 29.3065 29.6673 10.9782C24.5495 24.0712 0.495952 22.0634 0.948075 34.7807ZM0.753632 28.9116C6.54989 19.8712 34.2238 19.0163 27.8191 1.25572e-06C24.2731 14.5516 -1.56155 15.462 0.753632 28.9116Z"
          fill="#6D83F2"
        />
      </svg>
    );
  }

  return (
    <svg
      width="30"
      height="40"
      viewBox="0 0 30 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 40C7.04791 33.698 30.3563 38.9173 29.659 21.6716C23.1418 33.0567 1.35504 28.2781 0 40ZM0.948075 34.7807C7.45782 27.0447 33.2087 29.3065 29.6673 10.9782C24.5495 24.0712 0.495952 22.0634 0.948075 34.7807ZM0.753632 28.9116C6.54989 19.8712 34.2238 19.0163 27.8191 1.25572e-06C24.2731 14.5516 -1.56155 15.462 0.753632 28.9116Z"
        fill="#F8F8F8"
      />
    </svg>
  );
}
