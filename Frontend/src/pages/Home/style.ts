import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: min(90%, 1400px);
  margin: 0 auto;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 100vh;
    }

    img {
      width: 100%;
      max-width: 100%;
      height: auto;

      @media (min-width: 768px) {
        width: 100%;
        max-width: 100%;
        height: auto;
      }
    }
  }

  & > {
    margin-top: 70px;

    div {
      display: flex;
      flex-direction: column;
      gap: 15px;
      border-bottom: 2px solid var(--color-shading200);
    }

    @media (min-width: 768px) {
      margin-top: 0;
    }
  }

  & > :nth-child(2) {
    margin-top: 30px;
    display: flex;
    align-items: flex-start;

    & > :nth-child(1) {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 12px;

      p {
        color: var(--color-shading300);
        font-size: clamp(var(--font-size-7), 4vw, var(--font-size-3));
      }

      h2 {
        color: #4B0082;
        font-size: clamp(var(--font-size-5), 6vw, var(--font-size-2));
      }
    }

    & > :nth-child(2) {
      width: 100%;

      button {
        margin-top: 20px;
      }
    }

    @media (min-width: 768px) {
      margin-top: 0;
    }

    & > :nth-child(3) {
      width: 100%;
      max-width: 768px;
      display: flex;
      justify-content: center;
      margin-top: 20px;
      gap: 5px;

      p {
        color: var(--color-shading300);
        font-size: clamp(var(--font-size-7), 4vw, var(--font-size-4));
      }
    }

    @media (min-width: 768px) {
      margin-top: 0;
    }
  }
`;

const StyledError = styled.p`
  margin-top: 10px;
  color: var(--color-negative);
  font-size: clamp(var(--font-size-9), 3vw, var(--font-size-6));
`;

export { StyledMain, StyledError };