import { useEffect, useState } from 'react';
import JobInfo from '../JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const getJobs = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Not Found');
      const newJobs = await res.json();
      setJobs(newJobs);
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
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/*Job info*/}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
