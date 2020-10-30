import { useState } from 'react';
import { Job } from '../../components/Job/Job';
import { jobs } from '../../data/jobs';
import styled from 'styled-components';

const ExperienceContainerInner = styled.div`
  max-width: var(--content-max-width);
  background-color: var(--rise-n-shine);
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--h-spacing);
`;

const ProgressBarContainer = styled.div`
  max-width: var(--content-max-width);
  background-color: var(--rise-n-shine);
`;

const ProgressBar = styled.div`
  height: 0.4rem;
  width: 100%;
  background: var(--blue-nights);
  transition: width 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  align-self: flex-start;
  margin-top: auto;
  button {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    appearance: none;
    box-shadow: none;
    border: solid 0.2rem var(--blue-nights);
    background-color: transparent;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
    svg {
      transition: fill 0.2s ease-in-out;
      fill: var(--blue-nights);
      &.previous {
        transform: rotate(-180deg);
        transform-origin: center center;
      }
    }
    @media (hover: hover) {
      &:hover:not(:disabled) {
        background-color: var(--lynx-white);
        svg {
          fill: var(--rise-n-shine);
        }
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  }
`;

export const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section>
      <h2>
        <span>Experience</span>
      </h2>
      <ExperienceContainerInner>
        <Job key={jobs[currentIndex].company} job={jobs[currentIndex]} />
        <ButtonContainer>
          <button
            aria-label="Show previous item"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex(currentIndex - 1)}
          >
            <svg
              className="previous"
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1.60615L7.79167 8.97231L0.171877 16.4492L1.83333 18L11 8.91692L1.60417 0L0 1.60615Z" />
            </svg>
          </button>
          <button
            aria-label="Show next item"
            disabled={currentIndex === jobs.length - 1}
            onClick={() => setCurrentIndex(currentIndex + 1)}
          >
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.60615L7.79167 8.97231L0.171877 16.4492L1.83333 18L11 8.91692L1.60417 0L0 1.60615Z" />
            </svg>
          </button>
        </ButtonContainer>
      </ExperienceContainerInner>
      <ProgressBarContainer>
        <ProgressBar style={{ width: `${(100 / 3) * currentIndex}%` }} />
      </ProgressBarContainer>
    </section>
  );
};
