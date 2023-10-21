import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
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
  min-inline-size: 46rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background: ${(props) => props.theme.contactInfo};

  p {
    font-weight: 600;
  }

  p,
  ul {
    font-size: 1.6rem;
    line-height: 2rem;
    color: #f8f8f8;
  }

  li {
    display: flex;
    align-items: center;
    column-gap: 0.8rem;

    &:nth-child(2) {
      margin-block: 2rem;
    }
  }
`;

export const ContactFormStyles = styled.form`
  padding: 6rem;
  inline-size: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  .inline-group {
    display: flex;
    column-gap: 3.2rem;
    inline-size: 100%;

    .input-group {
      inline-size: 100%;
    }
  }

  .input-group {
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;

    label {
      font-weight: 700;
    }

    input,
    textarea,
    label {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    input,
    textarea {
      font-weight: 400;
      border-radius: 5px;
      padding: 1.2rem;
      color: #707070;
      border: 1px solid ${(props) => props.theme.contactInputBorder};
      background: ${(props) => props.theme.contactInputBg};
      resize: none;

      &:focus-visible {
        outline: -webkit-focus-ring-color auto 1px;
      }
    }
  }

  button {
    cursor: pointer;
    padding: 1.6rem;
    color: #f8f8f8;
    font-size: 1.6rem;
    line-height: 2rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: 500;
    background: linear-gradient(180deg, #6a98f0 0%, #4961dc 100%);
    inline-size: fit-content;
  }
`;
