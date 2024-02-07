import styled from 'styled-components';

const ContactCreationStyled = styled.div`
  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: var(--color-shading200);
      font-size: clamp(var(--font-size-5), 5vw, var(--font-size-3));
    }
  }

  & > :nth-child(2) {
    button {
      margin-top: 35px;
    }
  }
`;

const ContactCreationError = styled.p`
  margin-top: 15px;
  color: var(--color-negative);
  font-size: clamp(var(--font-size-9), 3vw, var(--font-size-6));
`;

export { ContactCreationStyled, ContactCreationError };
