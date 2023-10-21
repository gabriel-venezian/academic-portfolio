import styled from 'styled-components';

export const ViewOnlineWrapper = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  block-size: ${(props) => (props.size === 'medium' ? '4rem' : '5.4rem')};
  inline-size: ${(props) => (props.size === 'medium' ? '4rem' : '5.4rem')};
  border-radius: 50%;
  background: linear-gradient(90deg, #6a98f0 0%, rgba(73, 97, 220, 0.99) 100%);

  svg {
    block-size: ${(props) => (props.size === 'medium' ? '2.4rem' : '3.2rem')};
    inline-size: ${(props) => (props.size === 'medium' ? '2.4rem' : '3.2rem')};
  }
`;
