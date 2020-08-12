import React from 'react';
import NavBar from '../components/layouts/Navbar';
import Users from '../components/users/Users';
import Search from '../components/users/Search';
import axios from 'axios';
import Alert from '../components/layouts/Alert/Alert';



class Github extends React.Component {

  state = {
    users:[],
    loading:false,
    alert:null,
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
   },3000)
 }




  render () {

      return(
        <React.Fragment>
          <NavBar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Search searchUser={this.searchUsers}
              clearUser={this.clearUsers}
              showClear={this.state.users.length > 0 ? true : false}
              setAlert = {this.showAlertMessage}
            />
            <Users users={this.state.users}
              loading={this.state.loading}
            />
          </div>
        </React.Fragment>
      )
  }
}

export default Github;
