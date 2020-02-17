import { FETCH_REPO_PULLS_LOADING, FETCH_REPO_PULLS } from '../actions/repoActions';

const initialState = {
  repoPulls: null,
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type){
    case FETCH_REPO_PULLS_LOADING:
      return { ...state, loading: true };
    case FETCH_REPO_PULLS:
      return { ...state, repoPulls: action.payload, loading: false };
    default:
      return state;
  }
}
