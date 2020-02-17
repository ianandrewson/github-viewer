import { 
  SET_USER, 
  FETCH_USER_INFO, 
  FETCH_USER_INFO_LOADING,
  FETCH_USER_REPOS
} from '../actions/userActions';

const initialState = {
  username: '',
  userInfo: null,
  loading: false,
  repos: []
};

export default function reducer(state = initialState, action) {
  switch(action.type){
    case SET_USER:
      return { ...state, username: action.payload };
    case FETCH_USER_INFO_LOADING:
      return { ...state, loading: true };
    case FETCH_USER_INFO:
      return { ...state, userInfo: action.payload, loading: false };
    case FETCH_USER_REPOS:
      return { ...state, userRepos: action.payload };
    default:
      return state;
  }
}
