import React from 'react';
import { WithLabel } from '../styled';

export default function IconGit({ withLabel }) {
  const renderIcon = () => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.948712 13.7423L10.2037 4.47135L12.9097 7.1934C12.5254 8.55442 13.1499 10.0435 14.3988 10.7641V19.6347C13.4381 20.1791 12.7976 21.2199 12.7976 22.4048C12.7976 23.2541 13.135 24.0687 13.7356 24.6692C14.3361 25.2698 15.1507 25.6072 16 25.6072C16.8493 25.6072 17.6639 25.2698 18.2644 24.6692C18.865 24.0687 19.2024 23.2541 19.2024 22.4048C19.2024 21.2199 18.5619 20.1791 17.6012 19.6347V11.8529L20.9157 15.1994C20.8036 15.4396 20.8036 15.7118 20.8036 16C20.8036 16.8493 21.141 17.6639 21.7416 18.2644C22.3421 18.865 23.1567 19.2024 24.006 19.2024C24.8553 19.2024 25.6699 18.865 26.2704 18.2644C26.871 17.6639 27.2084 16.8493 27.2084 16C27.2084 15.1507 26.871 14.3361 26.2704 13.7356C25.6699 13.135 24.8553 12.7976 24.006 12.7976C23.7178 12.7976 23.4456 12.7976 23.2054 12.9097L19.0903 8.7946C19.5066 7.30548 18.7381 5.67225 17.2489 5.04779C16.5604 4.79159 15.8399 4.72755 15.1994 4.90368L12.4774 2.19765L13.7423 0.948712C14.9912 -0.316237 17.0088 -0.316237 18.2577 0.948712L31.0513 13.7423C32.3162 14.9912 32.3162 17.0088 31.0513 18.2577L18.2577 31.0513C17.0088 32.3162 14.9912 32.3162 13.7423 31.0513L0.948712 18.2577C-0.316237 17.0088 -0.316237 14.9912 0.948712 13.7423Z"
          fill="#6D83F2"
        />
      </svg>
    );
  };

  if (withLabel) {
    return (
      <WithLabel>
        {renderIcon()}
        <label>Git</label>
      </WithLabel>
    );
  }

  return renderIcon();
}
