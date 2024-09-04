import React from "react";

export default function Jobs({ jobs }) {
  if (!jobs) return <h2>Something is wrong or there are no jobs</h2>;

  return (
    <div className="jobs-list--container">
      <ul className="jobs-list--box">
        {jobs.map((job) => (
          <li className="jobs-list--item" key={job.id}>
            <img src={job.logo} alt={job.company}></img>
            <div>
            <p>{job.postedAt}</p>
            <span>・</span>
            <p>{job.contract}</p>
            </div>
            <h3>{job.position}</h3>
            <p className="jobs-list--company">{job.company}</p>
            <p className="jobs-list--location">{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
