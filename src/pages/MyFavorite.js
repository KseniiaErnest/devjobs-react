import React, { useContext, useEffect } from 'react'
import { Context } from '../context';
import { useNavigate } from 'react-router-dom';

export default function MyFavorite() {
  const { state, dispatch  } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
const saved = JSON.parse(localStorage.getItem('favJobs')) || [];

dispatch({type: 'LOAD_FAV_JOBS', payload: saved});

  }, [dispatch]);


  const handleDeleteFavJob = (jobToDelete) => {
const currentFavJobs = JSON.parse(localStorage.getItem('favJobs')) || [];
const updatedList = currentFavJobs.filter((job) => job.id !== jobToDelete.id);

dispatch({type: 'DELETE_FAV_JOB', payload: jobToDelete})
localStorage.setItem('favJobs', JSON.stringify(updatedList));
  }

  return (
    <div className="jobs-list--container">
      <ul className="jobs-list--box">
        {state.myFavoriteJobs.map((favJob) => (
          <li className="jobs-list--item" key={favJob.id}>
          <div className='favorite-box' onClick={() => navigate(`/jobboard/job/${favJob.id}`)}>
          <h3>{favJob.position}</h3>
          <p >{favJob.company}</p>
          <p >{favJob.location}</p>
          </div>
          <button className='favorite--btn-delete' onClick={() => handleDeleteFavJob(favJob)}>X</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

