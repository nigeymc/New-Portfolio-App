import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { homepageReducer, myExperiencePageReducer, skillsReducer, githubDataReducer, projectsDataReducer } from "../reducers/fetchDataReducer";

export const reducers = combineReducers({
  homepage: homepageReducer,
  experiencePage: myExperiencePageReducer,
  skillsPage: skillsReducer,
  githubData: githubDataReducer,
  projectsData: projectsDataReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store.js

export function configureStore(initialState = {}) {

  // const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : initialState;

  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  // store.subscribe(() => {
  //     localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  // });

  return store;
}

export const store = configureStore();
