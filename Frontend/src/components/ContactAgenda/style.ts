import styled from 'styled-components';

const RegistryCard = styled.li`
  box-shadow: 1px 18px 30px 3px rgba(0, 0, 0, 0.9);
  border-radius: var(--radius-size-2);
  padding: 1rem;
  background-color: var(--color-card);
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: space-between;

    span {
      color: var(--color-background);
      font-size: clamp(var(--font-size-8), 3vw, var(--font-size-2));
      margin-right: 25px;
    }

    p {
      color: var(--color-quaternary);
      font-size: clamp(var(--font-size-5), 3vw, var(--font-size-3));
    }
  }
`;

export { RegistryCard };
