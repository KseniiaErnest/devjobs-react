import React, { useContext } from 'react'
import SearchBar from '../components/SearchBar'
import Jobs from '../components/Jobs'
import { Context } from '../context'

export default function Jobboard() {
  const { state } = useContext(Context);
  return (
    <div>
      <SearchBar />
     <Jobs jobs={state.jobs} />
    </div>
  )
}
