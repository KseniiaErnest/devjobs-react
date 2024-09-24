import React, { useContext, useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Jobs from '../components/Jobs'
import { Context } from '../context'

export default function Jobboard() {
  const { state } = useContext(Context);

  // Initialize a displayedJobs state to show some amount of jobs.
  // Set it to an empty array at first as displayedJobs depends on global jobs state.
  const [displayedJobs, setDisplayedJobs] = useState([]);
  // Initialize index state to keep track on how many jobs has beed displayed; we need to use state to keep the number between renders;
  const [index, setIndex] = useState(6);
  const [btnVisisble, setBtnVisible] = useState(true);

  const filteredJobs = state.jobs.filter((jobToFilter) => {
    const titleCompanyExpertiseMatch = jobToFilter.position.toLowerCase().includes(state.searchFilter.titleCompanyExpertise.toLowerCase()) || 
    jobToFilter.company.toLowerCase().includes(state.searchFilter.titleCompanyExpertise.toLowerCase());
    
    const locationMatch = jobToFilter.location.toLowerCase().includes(state.searchFilter.location.toLowerCase());

    const fullTimeMatch = state.searchFilter.fullTime ? jobToFilter.contract === 'Full Time' : true;

    return titleCompanyExpertiseMatch && locationMatch && fullTimeMatch;
    
  })


  // Use useEffect to set displayedJobs 
  useEffect(() => {
    try{
  // We need to be sure that state.jobs was fetched and not an empty array    
if (filteredJobs.length > 0) {
  setDisplayedJobs(filteredJobs.slice(0, index));
  // Use slice because it does not mutate the jobs state.
}

    }catch(err) {
      console.log(err);
    }

    // Only renderes when state.jobs or index change
  }, [filteredJobs, index]);


  const handleMoreJobs = () => {
    if (index + 6 < filteredJobs.length) {
      setIndex((index) => index + 6);
    } else {
      // setIndex((index) => (state.jobs.length - index) + index);
      setIndex(filteredJobs.length);
      setBtnVisible(false);
    }

  }

  return (
    <div>
      <SearchBar />
     <Jobs jobs={displayedJobs} />
     {btnVisisble && <button className='btn load' onClick={handleMoreJobs}>Load More</button>}
    </div>
  )
}


/*

  // Use useEffect to set displayedJobs 
  useEffect(() => {
    try{
  // We need to be sure that state.jobs was fetched and not an empty array    
if (state.jobs.length > 0) {
  setDisplayedJobs(state.jobs.slice(0, index));
  // Use slice because it does not mutate the jobs state.
}

    }catch(err) {
      console.log(err);
    }

    // Only renderes when state.jobs or index change
  }, [state.jobs, index]);


  const handleMoreJobs = () => {
    if (index + 6 < state.jobs.length) {
      setIndex((index) => index + 6);
    } else {
      // setIndex((index) => (state.jobs.length - index) + index);
      setIndex(state.jobs.length);
      setBtnVisible(false);
    }

*/