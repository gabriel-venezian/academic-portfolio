import styled from 'styled-components';

export const CertificatesWrapper = styled.div`
  max-inline-size: 116rem;
  margin-block-end: 8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  margin-inline: auto;

  @media (max-width: 1200px) {
    margin-inline: 2rem;
    max-inline-size: calc(100% - 4rem);
    gap: 2rem;
    justify-content: center;
  }
`;

export const Certificate = styled.div`
  display: flex;
  flex-direction: column;
  block-size: 36rem;
  inline-size: 36rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${(props) => props.theme.certificateBorder};

  img {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  @media (max-width: 1200px) {
    inline-size: fit-content;
    block-size: fit-content;
  }
`;

export const CertificateInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  block-size: 8rem;
  inline-size: 100%;
  background: ${(props) => props.theme.certificateInfoBg};
  border-block-start: 0.1rem solid
    ${(props) => props.theme.certificateInfoBorder};
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding-inline: 2rem;
  padding-block: 2rem;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 400;
`;
