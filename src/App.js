import React from 'react';
import './App.css';
import NavBar from './components/layouts/Navbar';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
      <NavBar title="Github App" />
      <div className="container">
        <Users />
      </div>
    </div>
  );
}

export default App;
