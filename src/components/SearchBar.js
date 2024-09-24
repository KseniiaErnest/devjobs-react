import React, { useContext, useState } from 'react'
import { Context } from '../context'

export default function SearchBar() {
  const { state, dispatch } = useContext(Context);
  const [localSearchQuery, setLoaclSearchQuery] = useState({
  titleCompanyExpertise: '',
  location: '',
  fullTime: false,
  })

  const handleSearchChange = (name, e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setLoaclSearchQuery(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'UPDATE_SEARCH_FILTER', payload: localSearchQuery});

    setLoaclSearchQuery({
      titleCompanyExpertise: '',
      location: '',
      fullTime: false,
    });

  }

  return (
    <form onSubmit={handleSubmit} className='search--container'>
      <input className='search-input different' name='titleCompanyExpertise' value={localSearchQuery.titleCompanyExpertise || ''} onChange={(e) => handleSearchChange('titleCompanyExpertise', e)}  />
      <input className='search-input location' name='location' value={localSearchQuery.location || ''} onChange={(e) => handleSearchChange('location', e)} />
      <label className='search-input check'>
      <input className='search-input--checkbox'  type='checkbox' name='fullTime' value={localSearchQuery.fullTime || false} onChange={(e) => handleSearchChange('fullTime', e)} />
      Full Time Only
      <button className='btn search' type='submit'>Search</button>
      </label>
    </form>
  )
}


/* 
  const handleSearchChange = (name, e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    dispatch({type: 'UPDATE_SEARCH_FILTER', payload: {[name]: value}});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('search object:', state.searchFilter);
  }
*/