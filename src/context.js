import { createContext, useReducer } from "react";

const Context = createContext();

const initialState = {
  jobs: [],
  myFavoriteJobs: [],
};

function reducer(state, action) {
switch(action.type) {
case 'SET_JOBS': return {...state, jobs: action.payload};
case 'SAVE_JOB': return {...state, myFavoriteJobs: [...state.myFavoriteJobs, action.payload]}


  default:
    return state;
}
}

function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return(
    
      <Context.Provider value={{state, dispatch}}>
        {props.children}
      </Context.Provider>
   
  )
}


export {Context, ContextProvider};