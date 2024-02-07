import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top: 10px;
  gap: 12px;
  width: 97vw;
  
  height: 298px;
  background: var(--color-secondary);
  border-radius: var(--radius-size-2);

  & > :nth-child(1) {
    width: min(100%, 1400px);
    margin: 0 auto;
    padding-top: 2.5rem;
    display: flex;
    align-items: center;
    gap: 12px;
    display: flex;
    justify-content: space-between;

    h1 {
      color: var(--color-background);
      font-size: clamp(var(--font-size-2), 7vw, var(--font-size-0));
      width: 50vw;
    }

    & > div {
      display: flex;
      gap: 7px;
      flex-direction: column;

      p {
        color: var(--color-background);
        font-size: clamp(var(--font-size-4), 3.5vw, var(--font-size-5));
      }
    }
  }

  & > :nth-child(2) {
    width: min(90%, 1400px);
    margin: 0 auto;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledMain = styled.main`
  margin-top: 35px;

  section {
    width: min(90%, 1400px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 50vw;
      gap: 20px;
      border-radius: var(--radius-size-3);
    }

    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      row-gap: 60px;
      font-weight: bold;
      color: var(--color-text-secondary);
      width: 100%;
      margin-bottom: 30px;

      @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        text-align: start;

      }
      gap: 30px;
      flex-wrap: wrap;
    }

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 30pxs;
        gap: 15px;

        p {
          color: var(--color-background);
          font-size: clamp(var(--font-size-9), 4vw, var(--font-size-4));
        }
      }
    }
  }
`;

export { StyledHeader, StyledMain, StyledDiv };