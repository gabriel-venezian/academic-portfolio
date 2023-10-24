import React, { useContext } from 'react';
import ThemeContext from '../../../../context/ThemeContext';

export default function IconLocation() {
  const { theme } = useContext(ThemeContext);
  const handleTheme = theme.light ? '#F8F8F8' : '#6D83F2';

  const renderIcon = () => {
    return (
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1.93896C6.50001 1.93896 3.33301 4.62196 3.33301 8.77197C3.33301 11.422 5.37501 14.539 9.45001 18.13C9.604 18.2628 9.80061 18.3359 10.004 18.3359C10.2074 18.3359 10.404 18.2628 10.558 18.13C14.625 14.539 16.667 11.422 16.667 8.77197C16.667 4.62196 13.5 1.93896 10 1.93896ZM10 10.272C9.08301 10.272 8.33301 9.52197 8.33301 8.60497C8.33301 7.68797 9.08301 6.93796 10 6.93796C10.917 6.93796 11.667 7.68797 11.667 8.60497C11.667 9.52197 10.917 10.272 10 10.272Z"
          fill={handleTheme}
        />
      </svg>
    );
  };

  return renderIcon();
}
