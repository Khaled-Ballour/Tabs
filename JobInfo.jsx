import Duties from './src/Duties';

const JobInfo = (props) => {
  const { company, dates, duties, title } = props.jobs[0];
  return (
    <article className="jon-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
