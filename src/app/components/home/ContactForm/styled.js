import styled from 'styled-components';

export const ContactWrapper = styled.div`
  inline-size: 116rem;
  block-size: 57.2rem;
  margin-inline: auto;
  background: #fff;
  margin-block-end: 8rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.contactWrapper};
`;

export const ContactInfo = styled.div`
  padding: 6rem;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  block-size: 100%;
  inline-size: 46rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background: ${(props) => props.theme.contactInfo};
`;

export const ContactForm = styled.form``;
