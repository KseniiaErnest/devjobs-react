import React, { useEffect, useState } from 'react';


export default function Homepage() {
const [dataRoles, setDataRoles] = useState([]);
  const [role, setRole] = useState(0);

  const nextRole = () => {
    setRole((role) => {
      role++;
      if (role > dataRoles.length - 1) {
        role = 0;
      }

      return role;
    } )
  };

  const prevRole = () => {
    setRole((role) => {
      role--;

      if (role < 0) {
        return dataRoles.length - 1;
      }

      return role;
    })
  };

  useEffect(() => {
    const getData = async () => {
      try {
const response = await fetch(`${process.env.PUBLIC_URL}/data-roles.json`);
if (!response.ok) throw new Error('Something is wrong!');
const data = await response.json();
setDataRoles(data); 
      } catch(err) {
        console.log(err);
      }
    }
    getData();
  }, [setDataRoles]);
  
  return (
    <div className='homepage-container--main'>
      <div className='homepage-container--welcome'>
        <h2>Welcome to DevJobs – Your Gateway to the Best Developer Opportunities!</h2>
        <p>At DevJobs, we connect talented developers with leading companies in the tech industry. Whether you’re a frontend wizard, a backend architect, or a full-stack all-rounder, we have something for everyone. Explore jobs across different roles, find your dream position, and kickstart the next exciting chapter in your tech career.

Let’s get you started – browse the latest openings, apply with ease, and step into your future today!</p>
      </div>

      <div className='homepage-container--slider'>
        <button className='btn--slider border-left' onClick={prevRole}>&larr;</button>
        <div className='role-container'>
        {dataRoles.length > 0 && (
          <>
          
          <img className='homepage-img' src={`${process.env.PUBLIC_URL}${dataRoles[role].image}`} alt='logo'/>
          <div className='role-description'>
          <h3>{dataRoles[role].role}</h3>
          <p>{dataRoles[role].description}</p>
          </div>
          </>
        )}
          
        </div>
        <button className='btn--slider border-right' onClick={nextRole}>&rarr;</button>
      </div>
    </div>
  )
}
