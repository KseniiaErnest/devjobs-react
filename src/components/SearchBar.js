import React, { useContext, useState } from 'react'
import { Context } from '../context'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const { state, dispatch } = useContext(Context);
  const [localSearchQuery, setLocalSearchQuery] = useState({
  titleCompanyExpertise: '',
  location: '',
  fullTime: false,
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearchChange = (name, e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setLocalSearchQuery(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'UPDATE_SEARCH_FILTER', payload: localSearchQuery});

    setLocalSearchQuery({
      titleCompanyExpertise: '',
      location: '',
      fullTime: false,
    });


    if (modalOpen) {
      setModalOpen(false)
    }
  }

  const handleModal = () => {
    setModalOpen((prevState) => !prevState)
  }

  return (
    
    <form onSubmit={handleSubmit} className='search--container'>
    <div className='input-wrapper'>
    <svg className='svg-search' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" fill-rule="nonzero"/></svg>
      <input className='search-input different' name='titleCompanyExpertise' value={localSearchQuery.titleCompanyExpertise || ''} onChange={(e) => handleSearchChange('titleCompanyExpertise', e)}  />
      </div>
      <div className='input-wrapper no-display'>
      <svg className='svg-location' width="17" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" fill-rule="nonzero"/></svg>
      <input className='search-input location' name='location' value={localSearchQuery.location || ''} onChange={(e) => handleSearchChange('location', e)} />
      </div>
      <div className='filter-icon'>
      <FontAwesomeIcon onClick={handleModal}   icon={faFilter} style={{color: "#6c53da",}} />
      </div>
      <label className='search-input check'>
      <input className='search-input--checkbox no-display'  type='checkbox' name='fullTime' checked={localSearchQuery.fullTime || false} onChange={(e) => handleSearchChange('fullTime', e)} />
      <span className='no-display'>Full Time</span>
      <button className='btn search smaller-screen' type='submit'>
      <span className='no-text'>Search</span>
      <FontAwesomeIcon className='nav-icon' icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
      </button>
      </label>


      {modalOpen && (
<div className='modal-container'>
  <div className='model-content'>
 
  <div className='input-wrapper'>
      <svg className='svg-location' width="17" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" fill-rule="nonzero"/></svg>
      <input className='search-input location' name='location' value={localSearchQuery.location || ''} onChange={(e) => handleSearchChange('location', e)} />
      </div>
      <label className='search-input check-mobile'>
      <input className='search-input--checkbox'  type='checkbox' name='fullTime' checked={localSearchQuery.fullTime || false} onChange={(e) => handleSearchChange('fullTime', e)} />
      Full Time
      </label>
      <button  className='btn search-mobile' type='submit'>
     Search
  </button>
  <button className='btn-close' type='button' onClick={handleModal}>X</button>
  </div>
  
</div>
    )

    }
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

/*
<FontAwesomeIcon icon={faFilter} style={{color: "#ffffff",}} />
*/ 