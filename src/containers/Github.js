import React,{Component,Fragment} from 'react';
import NavBar from '../components/layouts/Navbar';
import Users from '../components/users/Users';
import User from '../components/users/user/User';
import Search from '../components/users/Search';
import axios from 'axios';
import Alert from '../components/layouts/Alert/Alert';
import {Switch, Route} from 'react-router-dom';
import About from '../components/layouts/pages/About';
import '../App.css';
import NotFound from '../components/layouts/pages/NotFound';


class Github extends Component {

  state = {
    users:[],
    loading:false,
    alert:null,
    user:{},
    repos:[]
  }

  // async componentDidMount(){
  //   // console.log(`${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
  //   this.setState({loading:true})
  //   const result = await axios.get(`https://api.github.com/users?client_id=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users:result.data,loading:false})
  //   console.log(result.data);
  // }


  searchUsers = async (param)=>{
    this.setState({loading:true})
    const result = await axios.get(`https://api.github.com/search/users?q=${param}&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({users:result.data.items,loading:false})
 }

 clearUsers = ()=>{
   this.setState({users:[],loading:false});
 }

 showAlertMessage = (msg,type)=>{
   this.setState({alert:{msg,type}});
   setTimeout(()=>{
     this.setState({alert:null})
   },5000)
 }

 getUser = async(name)=>{
   this.setState({loading:true})
   const result = await axios.get(`https://api.github.com/users/${name}?client_id=
     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
     this.setState({user:result.data,loading:false})
 }

getUserRepos = async(name)=>{
  this.setState({loading:true})
  const result = await axios.get(`https://api.github.com/users/${name}/repos?per_page=5&sort=created:asc&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({repos:result.data,loading:false})
}



  render () {

      return(
        <div className="App">
          <NavBar/>
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path="/" render={props=>(
                  <Fragment>
                    <Search searchUser={this.searchUsers}
                      clearUser={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert = {this.showAlertMessage}
                    />
                    <Users users={this.state.users}
                      loading={this.state.loading}
                    />
                  </Fragment>
                )} />
              <Route path="/about" exact component={About} />
              <Route exact path='/user/:login' render={props=>(
                  <User {...props}
                    getUser={this.getUser}
                    user={this.state.user}
                    getUserRepos={this.getUserRepos}
                    repos={this.state.repos}
                    loading={this.state.loading} />
                )} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </div>
      )
  }
}

export default Github;
