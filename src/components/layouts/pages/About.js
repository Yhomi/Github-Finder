import React from 'react';
import NavBar from '../Navbar';

const about = (props) => {
  return (
    <React.Fragment>
        <NavBar />
      <div className="container">

          <h1>About This App</h1>
          <p>App to search Github users</p>
          <p>Version: 1.0.0</p>
      </div>
    </React.Fragment>
  )
}

export default about
