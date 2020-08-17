import React,{useReducer} from 'react';
import * as actionTypes from '../actionTypes';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

const AlertState = props=>{
  const initialState = {
    alert:null
  }

  const [state,dispatch] = useReducer(AlertReducer,initialState)
  //show alert
  const setAlertMsg = (msg,type)=>{
   // setAlert({msg,type});
   dispatch({
     type:actionTypes.SET_ALERT,
     payload:{msg,type}
   })
    setTimeout(()=>{
      // setAlert(null)
      dispatch({type:actionTypes.CLEAR_ALERT})
    },5000)
  }


  return <AlertContext.Provider value={
      {
        alert:state.alert,
        setAlertMsg
      }
    }>
      {props.children}
  </AlertContext.Provider>
}

export default AlertState;
