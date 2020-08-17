import React,{useState,useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = props=> {

  const [text,setText] = useState('');

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);


  const changeHandler = (e)=>{
    setText(e.target.value)
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    if(text.trim() === ""){
      alertContext.setAlertMsg("Please enter something",'danger');
    }else{
      // props.searchUser(text);
      githubContext.searchUsers(text)
      setText('')
    }
    // console.log(this.state.text);

  }

    return(
      <div>
          <form className="form" onSubmit={submitHandler}>
            <input type="text" placeholder="Search Users..." value={text} onChange={changeHandler} />
            <input type="submit" value="Search" className="btn btn-dark btn-block" />
          </form>
          {githubContext.users.length > 0 ? <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button> : null}

      </div>
    )

}


export default Search;
