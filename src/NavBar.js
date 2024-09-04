import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header>
      <nav>
        <p>devjobs</p>
        <div className='nav--pages'>
          <Link to='/'>home</Link>
          <Link to='/jobboard'>jobboard</Link>
          <Link to='/myfavorite'>favorite</Link>
        </div>
        <div>
          theme change
        </div>
      </nav>
    </header>
  )
}
