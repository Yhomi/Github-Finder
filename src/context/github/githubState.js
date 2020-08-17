import React,{useReducer} from 'react';
import * as actionTypes from '../actionTypes';
import axios from 'axios';
import GithubReducer from './githubReducer';
import GithubContext from './githubContext';

const GithubState = props=>{
  const initialState = {
    users:[],
    user:{},
    repos:[],
    loading:false
  }
  const [state,dispatch] = useReducer(GithubReducer,initialState);

  //seerch user
  const searchUsers = async (param)=>{

    setLoading();
    const result = await axios.get(`https://api.github.com/search/users?q=${param}&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      // this.setState({users:result.data.items,loading:false})
      // setUsers(result.data.items);
      // setLoading(false);
      dispatch({
        type:actionTypes.SEARCH_USER,
        payload:result.data.items
      })
 }

  //get user
  const getUser = async(name)=>{
    // this.setState({loading:true})
    setLoading();
    const result = await axios.get(`https://api.github.com/users/${name}?client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      // this.setState({user:result.data,loading:false})
      dispatch({type:actionTypes.GET_USER,payload:result.data})
  }


  //get repos
  const getUserRepos = async(name)=>{
    // this.setState({loading:true})
    setLoading();
    const result = await axios.get(`https://api.github.com/users/${name}/repos?per_page=5&sort=created:asc&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      // this.setState({repos:result.data,loading:false})
      dispatch({type:actionTypes.GET_REPOS,payload:result.data})
  }

  //clear user
  const clearUsers = ()=>dispatch({type:actionTypes.CLEAR_USER })

  //set loading
  const setLoading = ()=> dispatch({type:actionTypes.SET_LOADING})

  return <GithubContext.Provider value={{
      users:state.users,
      user:state.user,
      repos:state.repos,
      loading:state.loading,
      searchUsers,
      clearUsers,
      getUser,
      getUserRepos
    }}>
    {props.children}
  </GithubContext.Provider>
}
export default GithubState;
