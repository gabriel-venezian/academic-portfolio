import styled from 'styled-components';

export const ThemeSwitchInput = styled.label`
  position: relative;
  block-size: 2.4rem;
  inline-size: 4.4rem;
  background: #c7d0ff;
  cursor: pointer;
  border-radius: 5rem;

  input {
    opacity: 0;
    inline-size: 0rem;
    block-size: 0rem;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    block-size: 1.8rem;
    inline-size: 1.8rem;
    inset-block: 0.3rem;
    ${(props) =>
      props.theme.light
        ? 'inset-inline-start: .3rem;'
        : 'inset-inline-end: .3rem;'}
    border-radius: 50%;
    background: linear-gradient(180deg, #6a98f0 0%, #4961dc 100%);

    img {
      position: absolute;
    }
  }
`;
