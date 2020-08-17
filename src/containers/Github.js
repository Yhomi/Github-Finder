import React,{useState,Fragment} from 'react';
import NavBar from '../components/layouts/Navbar';
import Users from '../components/users/Users';
import User from '../components/users/user/User';
import Search from '../components/users/Search';
// import axios from 'axios';
import Alert from '../components/layouts/Alert/Alert';
import {Switch, Route} from 'react-router-dom';
import About from '../components/layouts/pages/About';
import '../App.css';
import GithubState from '../context/github/githubState';
import AlertState from '../context/alert/alertState';


const Github = ()=> {

  // state = {
  //   users:[],
  //   loading:false,
  //   alert:null,
  //   user:{},
  //   repos:[]
  // }
  // const [users,setUsers] = useState([]);
  // const [loading,setLoading] = useState(false);
  // const [alert,setAlert] = useState(null);
  // const [user,setUser] = useState({});
  // const [repos,setRepos] = useState([]);

  // async componentDidMount(){
  //   // console.log(`${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
  //   this.setState({loading:true})
  //   const result = await axios.get(`https://api.github.com/users?client_id=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users:result.data,loading:false})
  //   console.log(result.data);
  // }


 //  const searchUsers = async (param)=>{
 //    // this.setState({loading:true})
 //    setLoading(true);
 //    const result = await axios.get(`https://api.github.com/search/users?q=${param}&client_id=
 //      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
 //      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 //      // this.setState({users:result.data.items,loading:false})
 //      setUsers(result.data.items);
 //      setLoading(false);
 // }

 // const clearUsers = ()=>{
 //   // this.setState({users:[],loading:false});
 //   setUsers([]);
 //   setLoading(false);
 // }

 // const showAlertMessage = (msg,type)=>{
 //  setAlert({msg,type});
 //   setTimeout(()=>{
 //     setAlert(null)
 //   },5000)
 // }

 // const getUser = async(name)=>{
 //   // this.setState({loading:true})
 //   setLoading(true);
 //   const result = await axios.get(`https://api.github.com/users/${name}?client_id=
 //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
 //     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 //     // this.setState({user:result.data,loading:false})
 //     setUser(result.data);
 //     setLoading(false);
 // }

// const getUserRepos = async(name)=>{
//   // this.setState({loading:true})
//   setLoading(true);
//   const result = await axios.get(`https://api.github.com/users/${name}/repos?per_page=5&sort=created:asc&client_id=
//     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
//     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
//     // this.setState({repos:result.data,loading:false})
//     setRepos(result.data);
//     setLoading(false);
// }

      return(
        <GithubState>
          <AlertState>
              <div className="App">
                <NavBar/>
                <div className="container">
                  <Alert />
                  <Switch>
                    <Route exact path="/" render={props=>(
                        <Fragment>
                          <Search />
                          <Users />
                        </Fragment>
                      )} />
                    <Route path="/about" exact component={About} />
                    <Route exact path='/user/:login' component={User} />
                  </Switch>

                </div>
              </div>
            </AlertState>
        </GithubState>
      )

}

export default Github;
