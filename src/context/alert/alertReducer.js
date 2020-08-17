import * as actionTypes from '../actionTypes';

const AlertReducer = (state,action)=>{
  switch (action.type) {
    case actionTypes.SET_ALERT:
      return{
        alert:{msg:action.payload.msg,type:action.payload.type}
      }
    case actionTypes.CLEAR_ALERT:
      return{
        alert:null
      }
    default: return state

  }
}

export default AlertReducer;
