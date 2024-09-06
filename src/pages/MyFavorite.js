import React, { useContext } from 'react'
import { Context } from '../context';

export default function MyFavorite() {
  const { state  } = useContext(Context);
  console.log(state.myFavoriteJobs);


  return (
    <div>
      <ul>
        {state.myFavoriteJobs.map((favJob) => (
          <li>
          
          <h1>{favJob.position}</h1>
          <h2>{favJob.position}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
