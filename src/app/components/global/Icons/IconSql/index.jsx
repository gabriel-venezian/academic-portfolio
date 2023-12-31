import React, { useContext } from 'react';
import ThemeContext from '../../../../context/ThemeContext';
import { WithLabel } from '../styled';

export default function IconReact({ withLabel }) {
  const { theme } = useContext(ThemeContext);
  const handleTheme = theme.light ? '#F8F8F8' : '#181818';

  const renderIcon = () => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="5" fill="#6D83F2" />
        <path
          d="M21.5666 16.2667C20.1 14.8 17.725 14.8083 16.2666 16.275C14.8 17.7417 14.8 20.1167 16.2666 21.575C17.5083 22.8083 19.425 23.025 20.9083 22.1L23.5 24.6583L24.6583 23.5L22.0833 20.9083C23.025 19.4333 22.8083 17.5 21.5666 16.2667ZM20.3916 20.3917C19.575 21.2083 18.2583 21.2 17.4416 20.3917C16.6333 19.575 16.6333 18.2583 17.45 17.4417C18.2583 16.6333 19.575 16.6333 20.3916 17.4417C21.2 18.2583 21.2 19.575 20.3916 20.3917ZM15.0833 22.75C14.5416 22.2 14.1166 21.5417 13.85 20.8167C11.225 20.375 9.33331 19.1333 9.33331 17.6667V20.1667C9.33331 22.0083 12.3166 23.5 16 23.5C15.6666 23.2833 15.3583 23.0333 15.0833 22.75ZM9.33331 13.5V16C9.33331 17.4 11.0583 18.6 13.5 19.0833C13.5 19.025 13.5 18.975 13.5 18.9167C13.5 18.1417 13.6666 17.375 13.9833 16.675C11.2833 16.25 9.33331 14.9917 9.33331 13.5ZM16 8.5C12.3166 8.5 9.33331 9.99167 9.33331 11.8333C9.33331 13.5 11.8333 14.9 15.0416 15.1667H15.0833C16.0833 14.1167 17.4666 13.5 18.9166 13.5C19.675 13.5 20.425 13.6583 21.1166 13.9667C21.975 13.575 22.5583 12.7667 22.6666 11.8333C22.6666 9.99167 19.6833 8.5 16 8.5Z"
          fill={handleTheme}
        />
      </svg>
    );
  };

  if (withLabel) {
    return (
      <WithLabel>
        {renderIcon()}
        <label>SQL</label>
      </WithLabel>
    );
  }

  return renderIcon();
}
