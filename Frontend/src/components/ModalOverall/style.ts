import styled from 'styled-components';

const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background-color: var(--color-background);
    padding: 33px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.55);
    width: 91%;
    max-width: 680px;
  }
`;

export default Container;
