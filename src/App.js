import './App.css';
import { BrowserRouter as Router, Routes, Route, useActionData } from 'react-router-dom';
import NavBar from './NavBar';
import Homepage from './pages/Homepage';
import Jobboard from './pages/Jobboard';
import MyFavorite from './pages/MyFavorite';
import { useContext, useEffect, useState } from 'react';
import { Context } from './context';
import JobDetails from './components/JobDetails';

function App() {
  const {state, dispatch} = useContext(Context);

  const applyMode = (modeDark) => {
    if (modeDark === true) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode')
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('./data.json');
        if (!response.ok) throw new Error('Something is wrong!')
        const data = await response.json();
        dispatch({type: 'SET_JOBS', payload: data});
  
      } catch(err) {
        console.log('Error:', err);
      }
      
    }
    getData();
   }, [dispatch]);

useEffect(() => {
    const darkModeStorage = localStorage.getItem('dark-mode') === 'true';
    if (darkModeStorage !== state.darkMode) {
      dispatch({ type: 'TOGGLE_MODE', payload: darkModeStorage });
    }
  }, []);

useEffect(() => {
applyMode(state.darkMode);
localStorage.setItem('dark-mode', state.darkMode)
   }, [state.darkMode]);







  return (
    <div className="App">
    <Router>
    <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/jobboard' element={<Jobboard />} />
        <Route path='/jobboard/job/:idJob' element={<JobDetails />} />
        <Route path='/myfavorite' element={<MyFavorite />} />
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
