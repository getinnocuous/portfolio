import { Job } from '../../components/Job/Job';
import { jobs } from '../../data/jobs';

export const Experience = () => (
  <section>
    <h2>
      <span>Experience</span>
    </h2>
    {jobs.map((job) => (
      <Job key={job.company} job={job} />
    ))}
  </section>
);
