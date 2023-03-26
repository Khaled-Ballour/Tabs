import { useEffect, useState } from 'react';
import JobInfo from '../JobInfo';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJpbs] = useState([]);

  const getJobs = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Not Found');
      const newJobs = await res.json();
      setJpbs(newJobs);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading)
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );

  return (
    <section className="jobs-center">
      {/*Button container*/}
      {/*Job info*/}
      <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
