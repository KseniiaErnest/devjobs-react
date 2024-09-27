import React, { useContext, useEffect } from "react";
import { Context } from "../context";
import { useParams } from "react-router-dom";

export default function JobDetails() {
  const { state, dispatch } = useContext(Context);
  const { idJob } = useParams();

  if (!state.jobs)
    return <h2>Something is wrong or there is no job with that id</h2>;
  const job = state.jobs.find((job) => job.id === parseInt(idJob));

  const isJobSaved = state.myFavoriteJobs.find((savedJob) => savedJob.id === parseInt(idJob));


  const handleSaveJob = (jobToSave) => {
    try {
      const savedJobs = JSON.parse(localStorage.getItem('favJobs')) || [];
      const isJobAlreadySaved = savedJobs.some((savedJob) => savedJob.id === jobToSave.id);

      if (!isJobAlreadySaved) {
        const updatedJobs = [...savedJobs, jobToSave];
        dispatch({ type: 'SAVE_JOB', payload: jobToSave });
        localStorage.setItem('favJobs', JSON.stringify(updatedJobs));
      }
    } catch (error) {
      console.error("Failed to save job:", error);
    }
  };


  return (
    <div className="job-details--container">
      <div className="job-details--box-one">
        <div className="job-details--box-one-smaller-one">
          <div
            className="job-details--img-box"
            style={{ backgroundColor: job.logoBackground }}
          >
            <img
              src={`${process.env.PUBLIC_URL}${job.logo}`}
              alt={job.company}
            />
          </div>
          <div className="job-details--company">
            <h3>{job.company}</h3>
            <p>{job.website}</p>
          </div>
        </div>
        <button className="fake-link-btn">Company Site</button>
      </div>
      <div className="job-details--box-two">
        <div className="job-details--box-two-smaller-one">
          <p>{job.postedAt}</p>
          <span>・</span>
          <p>{job.contract}</p>
        </div>

        <div className="job-details--box-two-smaller-two">
          <h3>{job.position}</h3>
          <button className='btn search'>Apply Now</button>
        </div>
        <p className="text--left text--location">{job.location}</p>
        <div className="job-details--box-two-job--description text--body">
          {job.description}
        </div>
        <div className="job-details--box-two-smaller-three">
          <h4>Requirements</h4>
          <p className="text--left text--body">{job.requirements.content}</p>
          <ul className="text--left text--body">
            {job.requirements.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="job-details--box-two-smaller-three">
          <h4>What You Will Do</h4>
          <p className="text--left text--body">{job.role.content}</p>
          <ol className="text--left text--body">
            {job.role.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="job-details--box-three">
        <button className='btn search' onClick={() => handleSaveJob(job)} disabled={isJobSaved}>{isJobSaved ? 'Saved Job' : 'Save'}</button>
      </div>
    </div>
  );
}


// const handleSaveJob = (jobToSave) => {
//   const savedJobs = JSON.parse(localStorage.getItem('favJobs')) || [];
// if (!isJobSaved) {
//     dispatch({type: 'SAVE_JOB', payload: jobToSave});
//     localStorage.setItem('favJobs', JSON.stringify(jobToSave));
//   }
// }