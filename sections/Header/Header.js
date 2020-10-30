import styled from 'styled-components';
import { ContactIcons } from '../../components/ContactIcons/ContactIcons';

const HeaderContainer = styled.header`
  background-color: var(--protoss-pylon);
`;

const HeaderInner = styled.div`
  max-width: var(--layout-max-width);
  margin: auto;
  background-color: var(--protoss-pylon);
  padding: var(--h-spacing);
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: var(--v-spacing) var(--h-spacing);
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    max-height: 42rem;
  }
`;

const HeaderText = styled.p`
  margin: 0 0 1rem;
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--lynx-white);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
    max-width: var(--content-max-width);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2.4rem;
    margin: 0 0 2rem;
    max-width: none;
  }
`;

export const Header = () => (
  <HeaderContainer>
    <HeaderInner>
      <h1>
        <span>
          Elliot
          <br />
          Waddington.
        </span>
      </h1>
      <div>
        <HeaderText>
          Manchester based front-ender who’s passionate about writing clean, reusable and readable code.
        </HeaderText>
        <HeaderText>
          I’m an enthusiastic team player who is always striving to improve and progress. I’m a quick learner who is
          eager to build excellent products and user experiences.
        </HeaderText>
        <ContactIcons />
      </div>
    </HeaderInner>
  </HeaderContainer>
);
