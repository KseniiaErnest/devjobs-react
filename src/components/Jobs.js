import React from "react";
import { useNavigate } from "react-router-dom";

export default function Jobs({ jobs }) {
  const navigate = useNavigate();
  if (!jobs) return <h2>Something is wrong or there are no jobs</h2>;

  return (
    <div className="jobs-list--container">
      <ul className="jobs-list--box">
        {jobs.map((job) => (
          <li className="jobs-list--item" key={job.id}>
          <div className="job--logo" style={{backgroundColor: job.logoBackground}}>
            {/* <img className="svg-image" src={job.logo} alt={job.company}></img> */}
  
            </div>
            <div className="jobs-list--item-postedAt">
            <p>{job.postedAt}</p>
            <span>・</span>
            <p>{job.contract}</p>
            </div>
            <h3 className="jobs-list--item-position" onClick={() => navigate(`/jobboard/job/${job.id}`)}>{job.position}</h3>
            <p className="jobs-list--company">{job.company}</p>
            <p className="jobs-list--location">{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
