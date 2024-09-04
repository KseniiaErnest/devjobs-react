import React from 'react'

export default function SearchBar() {
  return (
    <form className='search--container'>
      <input className='search-input different' />
      <input className='search-input location' />
      <label className='search-input check'>
      <input className='search-input--checkbox'  type='checkbox' />
      Full Time Only
      <button className='btn search'>Search</button>
      </label>
    </form>
  )
}
