import styled from 'styled-components';
import { portfolio } from '../../data/portfolio';

const PortfolioContainer = styled.section`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-column: 1 / span 2;
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: var(--h-spacing);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const PortfolioItem = styled.article`
  max-width: var(--content-max-width);
  background-color: var(--protoss-pylon);
  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    padding: var(--h-spacing);
    border-top: solid 1rem var(--protoss-pylon);
    border-bottom: solid 1rem var(--protoss-pylon);
    transition: border 0.2s ease-in-out;
    &:hover,
    &:focus {
      border-top: solid 1rem var(--rise-n-shine);
      border-bottom: solid 1rem var(--rise-n-shine);
    }
    > div {
      margin-top: 1rem;
    }
  }
`;

const PortfolioItemDescription = styled.p`
  font-family: var(--heading);
  color: var(--lynx-white);
  font-size: 1.8rem;
  margin: 0 0 auto;
`;

const PortfolioItemTech = styled.span`
  font-family: var(--heading);
  color: var(--lynx-white);
  font-size: 1.4rem;
`;

const PortfolioItemTechList = styled.ul`
  margin: 0.3rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  li {
    margin-right: 1rem;
    svg {
      fill: ${({ theme }) => theme.color.white};
    }
  }
`;

export const Portfolio = () => {
  return (
    <PortfolioContainer>
      <h2>
        <span>Portfolio</span>
      </h2>
      <PortfolioGrid>
        {portfolio.map((item) => {
          const { url, title, description, tech } = item;
          return (
            <PortfolioItem key={title}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <h3>
                  <span>{title}</span>
                </h3>
                <PortfolioItemDescription>{description}</PortfolioItemDescription>
                <div>
                  <PortfolioItemTech>Tech used:</PortfolioItemTech>
                  <br />
                  <PortfolioItemTechList>
                    {tech.map((item, index) => (
                      <li key={index}> {item}</li>
                    ))}
                  </PortfolioItemTechList>
                </div>
              </a>
            </PortfolioItem>
          );
        })}
      </PortfolioGrid>
    </PortfolioContainer>
  );
};
