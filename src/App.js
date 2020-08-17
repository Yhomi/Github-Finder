import React,{useState,useEffect} from 'react';
import './App.css';
import Github from './containers/Github';
import {Route,Switch} from 'react-router-dom';
import About from './components/layouts/pages/About';
import axios from 'axios';
import User from './components/users/user/User';
import NavBar from './components/layouts/Navbar';


function App() {
//   const [user,setUser] = useState(null);
//   const [loading,setLoading] = useState(false)
//
// const getUser = async (name)=>{
//   setLoading(true)
//   const result = await axios.get(`https://api.github.com/users/${name}?client_id=
//     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
//     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
//     console.log(result);
//     setUser(result.data);
//     setLoading(false);
// }

  return (

      <div className="App">
      {/*  <NavBar />
        <Switch>
          <Route path="/" exact component={Github} />
          <Route exact path="/user/:login"
            render={(props)=>(<User {...props}
            getUser={getUser}
            user={user}
            loading={loading}
             />)}
          />
          <Route path="/about" exact component={About} />

        </Switch>
        */}

      </div>
  );
}

export default App;
