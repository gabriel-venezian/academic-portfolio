import React, { useContext } from 'react';
import ThemeContext from '../../../../context/ThemeContext';

export default function IconPhone() {
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
          d="M16.025 13.6587L13.908 13.4167C13.6592 13.3876 13.4071 13.4152 13.1705 13.4974C12.9339 13.5797 12.719 13.7145 12.542 13.8917L11.008 15.4247C8.6427 14.2216 6.72012 12.299 5.517 9.93371L7.058 8.39171C7.417 8.03371 7.592 7.53371 7.533 7.02471L7.292 4.92471C7.24464 4.51812 7.04942 4.14314 6.7435 3.87115C6.43759 3.59917 6.04234 3.44917 5.633 3.44971H4.192C3.25 3.44971 2.467 4.23371 2.525 5.17471C2.967 12.2917 8.658 17.9747 15.767 18.4167C16.708 18.4747 17.492 17.6917 17.492 16.7497V15.3087C17.4941 14.9012 17.3454 14.5072 17.0746 14.2027C16.8038 13.8981 16.43 13.7043 16.025 13.6587Z"
          fill={handleTheme}
        />
      </svg>
    );
  };

  return renderIcon();
}
