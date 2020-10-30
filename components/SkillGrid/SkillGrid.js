import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  padding: 1rem;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: var(--h-spacing);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SkillGrid = ({ children }) => <Grid>{children}</Grid>;
