import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  state = {
    text:''
  }
  static propTypes ={
    searchUser:PropTypes.func.isRequired,
    clearUser:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired
  }

  changeHandler = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  submitHandler = (e) =>{
    e.preventDefault();
    if(this.state.text.trim() === ""){
      this.props.setAlert("Please enter something",'danger');
    }else{
      this.props.searchUser(this.state.text);
      this.setState({text:""});
    }
    // console.log(this.state.text);

  }

  render () {
    return(
      <div>
          <form className="form" onSubmit={this.submitHandler}>
            <input type="text" placeholder="Search Users..." name="text" value={this.state.text} onChange={this.changeHandler} />
            <input type="submit" value="Search" className="btn btn-dark btn-block" />
          </form>
          {this.props.showClear ? <button className="btn btn-light btn-block" onClick={this.props.clearUser}>Clear</button> : null}

      </div>
    )
  }
}

export default Search;
