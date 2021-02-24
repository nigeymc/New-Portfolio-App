const homepageInitialState = {
  error: null,
  firstName: null,
  lastName: null,
  jobTitle: null,
  city: null,
  linkedIn: null,
  gitHub: null
};

export const homepageReducer = (state = homepageInitialState, action) => {
  switch (action.type) {
    // case "FETCH_DATA_LOADING":
    //   return {
    //     ...state,
    //     error: null,
    //     loading: action.payload,
    //   };

    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        ...action.payload, // ...{ firstName, lastName }
      };

    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

const myExperiencePageInitialState = {
  error: null,
  employment: [],
  riverIsland: [],
  riSummary: [],
  stellaDot: [],
  sdSummary: [],
  nap: [],
  napSummary: [],
  jet2: [],
  jet2Summary: [],
};

export const myExperiencePageReducer = (state = myExperiencePageInitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        error: null,
        loading: action.payload,
      };

    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        ...action.payload, // employmentData
      };

    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

const skillsInitialState = {
  error: null,
  university: [],
  school: [],
  languages: [],
  frameworks: [],
  services: [],
  tools: [],
  skillset: [],
  searchList: [],
  langKey: [],
  frameworksKey: [],
  servicesKey: [],
  toolsKey: [],
  skillsetKey: [],
  languagesVals: [],
  frameworksVals: [],
  servicesVals: [],
  toolsVals: [],
  skillsetVals: [],
  text: ''
};

export const skillsReducer = (state = skillsInitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        error: null,
        loading: action.payload,
      };

    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        error: true,
      };

    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };

    default:
      return state;
  }
};

const githubRepoInitialState = {
  error: null,
  filteredReposArr: {},
  endNav: {},
  expensify: {},
  portfolio: {},
  hooks: {}
};

export const githubDataReducer = (state = githubRepoInitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        error: null,
        loading: action.payload,
      };

    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

const projectsInitialState = {
  error: null,
  portfolioThumbnail: '',
  expensifyThumbnail: '',
  newFeaturesThumbnail: '',
  nonGithubProjects: []
};

export const projectsDataReducer = (state = projectsInitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        error: null,
        loading: action.payload,
      };

    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};