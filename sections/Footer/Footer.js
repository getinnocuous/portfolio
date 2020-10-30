import styled from 'styled-components';
import { ContactIcons } from '../../components/ContactIcons/ContactIcons';
import { theme } from '../../styles/GlobalStyles';

const FooterContainer = styled.footer`
  max-width: var(--layout-max-width);
  margin: var(--v-spacing) auto;
  padding: var(--v-spacing) var(--h-spacing);
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    margin: 0 1rem 0 0;
    a:hover {
      color: ${theme.color.mustard};
    }
  }
`;

export const Footer = () => (
  <FooterContainer>
    <h4>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/">
        Next.js
      </a>
      . Hosted by{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://vercel.com/">
        Vercel
      </a>
      .
    </h4>
    <ContactIcons size={32} baseColour={theme.color.navy} />
  </FooterContainer>
);
