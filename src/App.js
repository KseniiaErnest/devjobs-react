import './App.css';
import { BrowserRouter as Router, Routes, Route, useActionData } from 'react-router-dom';
import NavBar from './NavBar';
import Homepage from './pages/Homepage';
import Jobboard from './pages/Jobboard';
import MyFavorite from './pages/MyFavorite';
import { useContext, useEffect, useState } from 'react';
import { Context } from './context';

function App() {
  const {state, dispatch} = useContext(Context);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('./data.json');
        if (!response.ok) throw new Error('Something is wrong!')
        const data = await response.json();
        console.log(data);
        dispatch({type: 'SET_JOBS', payload: data});
  
      } catch(err) {
        console.log('Error:', err);
      }
      
    }
    getData();
   }, [dispatch]);


  return (
    <div className="App">
    <Router>
    <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/jobboard' element={<Jobboard jobs={state.jobs} />} />
        <Route path='/myfavorite' element={<MyFavorite />} />
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
