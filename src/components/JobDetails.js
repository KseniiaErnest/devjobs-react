import React, { useContext } from 'react'
import { Context } from '../context'
import { useParams } from 'react-router-dom';

export default function JobDetails() {
  const { state } = useContext(Context);
   const { idJob } = useParams();

 
   if (!state.jobs) return <h2>Something is wrong or there is no job with that id</h2>;
  const job = state.jobs.find((job) => job.id === parseInt(idJob));


  return (
    <div className='job-details--container'>
      <div className='job-details--box-one'>
      <div className='job-details--box-one-smaller-one'>
      <div className='job-details--img-box' style={{backgroundColor: job.logoBackground}} >
        <img src={`${process.env.PUBLIC_URL}${job.logo}`} alt={job.company} />
        </div>
         <div>
          <h3>{job.company}</h3>
          <p>{job.website}</p>
        </div>
        </div>
        <button>Company Site</button>
      </div>
      <div className='job-details--box-two'></div>
      <div className='job-details--box-three'></div>
    </div>
  )
}
