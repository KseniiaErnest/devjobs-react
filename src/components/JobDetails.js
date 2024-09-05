import React, { useContext } from 'react'
import { Context } from '../context'
import { useParams } from 'react-router-dom';

export default function JobDetails() {
  const { state } = useContext(Context);
   const { idJob } = useParams();

 
   if (!state.jobs) return <h2>Something is wrong or there is no job with that id</h2>;
  const job = state.jobs.find((job) => job.id === parseInt(idJob));


  return (
    <div>
       <h3>{job.position}</h3>
    </div>
  )
}
