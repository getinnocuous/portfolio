import styled from 'styled-components';

const JobContainer = styled.article`
  background-color: var(--rise-n-shine);
  padding: var(--h-spacing);
  margin-bottom: var(--v-spacing);
  margin-right: var(--h-spacing);
  flex-shrink: 0;
  max-width: var(--content-max-width);
  width: 100%;
  flex: 1;
  &:last-of-type {
    margin: 0;
  }
`;

const JobMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const JobCompany = styled.h3`
  font-size: 2.8rem;
  margin: 0;
  line-height: 1;
`;

const JobDate = styled.span`
  display: block;
  padding: 1rem;
  background-color: var(--lynx-white);
  font-size: 1.6rem;
  text-align: center;
  font-family: var(--heading);
`;

const JobRole = styled.span`
  font-family: var(--heading);
  font-size: 1.4rem;
`;

const JobInner = styled.div`
  padding-top: var(--h-spacing);
`;

const JobTasks = styled.ul`
  margin: 0;
  padding: 0 0 0 2rem;
  font-size: 1.6rem;
  list-style-type: square;
  li {
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const Job = ({ job }) => {
  const { company, role, date, work } = job;
  return (
    <JobContainer>
      <JobMeta>
        <div>
          <JobCompany>{company}</JobCompany>
          <JobRole>{role}</JobRole>
        </div>
        <JobDate>{date}</JobDate>
      </JobMeta>
      <JobInner>
        <JobTasks>
          {work.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </JobTasks>
      </JobInner>
    </JobContainer>
  );
};
