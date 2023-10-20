import React, { useContext } from 'react';
import ThemeContext from '../../../../context/ThemeContext';
import { ThemeSwitchInput } from './styled';
import Image from 'next/image';
import lightSwitch from '../../../../../../public/switch/light.svg';
import darkSwitch from '../../../../../../public/switch/dark.svg';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <ThemeSwitchInput onClick={toggleTheme}>
      <input type="checkbox" />
      <span>
        <Image
          src={theme.light ? lightSwitch : darkSwitch}
          width={'auto'}
          height={'auto'}
          alt={theme.light ? 'Claro' : 'Escuro'}
        />
      </span>
    </ThemeSwitchInput>
  );
}
