import React, { useContext } from 'react';
import ThemeContext from '../../../../context/ThemeContext';
import { WithLabel } from '../styled';

export default function IconJquery({ withLabel }) {
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
          d="M25.7009 14.2658C23.5343 16.0832 20.2896 15.7957 18.4722 13.6292C16.6445 11.4523 16.932 8.19736 19.0985 6.40045L19.6222 6.01027C17.8869 7.87905 17.774 10.7952 19.4579 12.818C21.1316 14.81 24.0272 15.2002 26.1732 13.814L25.7009 14.2658ZM23.8732 18.4654C20.6182 21.207 15.7614 20.786 13.0301 17.5207C10.2886 14.2658 10.7198 9.40899 13.9748 6.65715L14.9195 6C12.4346 8.80317 12.3114 13.0849 14.7962 16.0421C17.2811 18.9788 21.5115 19.6257 24.7049 17.6645L23.8732 18.4654ZM22.7129 23.4762C18.1539 27.3062 11.3462 26.7106 7.51621 22.1414C3.6965 17.5823 4.29204 10.7644 8.85105 6.95493L9.9908 6.14375C6.38672 10.0456 6.16082 16.1346 9.68276 20.3342C13.2047 24.5235 19.2423 25.3655 23.7294 22.5007L22.7129 23.4762Z"
          fill={handleTheme}
        />
      </svg>
    );
  };

  if (withLabel) {
    return (
      <WithLabel>
        {renderIcon()}
        <label>JQuery</label>
      </WithLabel>
    );
  }

  return renderIcon();
}
