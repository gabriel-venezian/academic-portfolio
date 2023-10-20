import styled from 'styled-components';

export const SectionTitleStyles = styled.h1`
  font-size: 3.2rem;
  font-weight: 900;
  line-height: 4.2rem;
  margin-block-end: 4rem;
  letter-spacing: 0.0016rem;
  text-align: center;
  color: ${(props) => props.theme.sectionTitle};
`;
