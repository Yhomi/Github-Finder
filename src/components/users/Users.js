import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/spinner/spinner';



const Users = props => {

    const {loading,users} = props;
    let userItem
    if(loading){
      userItem =  <Spinner />
    }else{
      userItem = users.map(user=>(
       <UserItem key={user.id} user={user}/>
     ))
   }
    return (
      <div style={userStyle}>
        {userItem}
      </div>
    )

}
const userStyle = {
  display:'grid',
  gridTemplateColumns:'repeat(3,1fr)',
  gridGap:'1rem'
}

export default Users;
