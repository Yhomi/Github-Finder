import React from 'react';
import PropTypes from 'prop-types';


class User extends React.Component {
  componentDidMount(){
    this.props.getUser(this.props.match.params.login)
  }
  render () {
    console.log(this.props.user);
    return(
        <div className="container">
          User
        </div>
    )
  }
}

export default User;
