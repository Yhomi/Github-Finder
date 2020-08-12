import React from 'react'
import PropTypes from 'prop-types';

const UserItem = ({user:{login,avatar_url,html_url}}) => {

    // const {login,avatar_url,html_url} = props.user
    return(
      <div className="card text-center ">
        <img src={avatar_url} className="round-img" style={{width:'60px'}} alt="" />
        <h3>{login}</h3>
        <div>
          <a className="btn btn-dark btn-sm my-1" href={html_url}>More</a>
        </div>
      </div>
    )
}

UserItem.propTypes = {
  user:PropTypes.object.isRequired
}

export default UserItem;