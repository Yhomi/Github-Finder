import * as actionTypes from '../actionTypes';

export default (state,action)=>{
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return{
        ...state,
        loading:true
      };
    case actionTypes.SEARCH_USER:
      return{
        ...state,
        users:action.payload,
        loading:false
      };
      case actionTypes.CLEAR_USER:
        return{
          ...state,
          users:[],
          loading:false
        };
      case actionTypes.GET_USER:
        return{
          ...state,
          user:action.payload,
          loading:false
        };
      case actionTypes.GET_REPOS:
        return{
          ...state,
          repos:action.payload,
          loading:false
        };

    default: return state

  }
}
