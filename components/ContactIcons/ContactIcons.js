import { Icloud, Github } from '@icons-pack/react-simple-icons';
import styled from 'styled-components';
import { theme } from '../../styles/GlobalStyles';

export const IconsContainer = styled.div`
  display: inline-grid;
  grid-gap: 1rem;
  grid-template-columns: auto auto;
  a:hover {
    svg {
      transition: fill 0.2s ease-in-out;
      fill: ${({ hoverColour }) => hoverColour};
    }
  }
`;

export const ContactIcons = ({ baseColour = theme.color.white, hoverColour = theme.color.mustard, size = 24 }) => (
  <IconsContainer hoverColour={hoverColour}>
    <a href="https://github.com/getinnocuous" target="_blank" rel="noopener noreferrer">
      <Github color={baseColour} size={size} />
    </a>
    <a href="mailto:elliotwaddington21@icloud.com">
      <Icloud color={baseColour} size={size} />
    </a>
  </IconsContainer>
);
