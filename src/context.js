import { createContext, useReducer } from "react";

const Context = createContext();

const initialState = {
  jobs: [],
  myFavoriteJobs: [],
  darkMode: false,
  searchFilter: {
    titleCompanyExpertise: '',
    location: '',
    fullTime: false,
  }
};

function reducer(state, action) {
switch(action.type) {
case 'SET_JOBS': return {...state, jobs: action.payload};
case 'SAVE_JOB': return {...state, myFavoriteJobs: [...state.myFavoriteJobs, action.payload]};
case 'LOAD_FAV_JOBS': return {...state, myFavoriteJobs: action.payload};
case 'DELETE_FAV_JOB': return {...state, myFavoriteJobs: state.myFavoriteJobs.filter((job) => job.id !== action.payload.id)};
case 'TOGGLE_MODE': return {...state, darkMode: !state.darkMode};
case 'UPDATE_SEARCH_FILTER': return {...state, searchFilter: { ...state.searchFilter, ...action.payload}};


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