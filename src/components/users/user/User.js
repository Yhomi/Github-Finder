import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../layouts/Navbar';

class User extends React.Component {
  componentDidMount(){
    this.props.getUser(this.props.match.params.login)
  }
  render () {
    console.log(this.props.user);
    return(
      <React.Fragment>
        <NavBar />
        <div className="container">
          User
        </div>
      </React.Fragment>
    )
  }
}

export default User;
