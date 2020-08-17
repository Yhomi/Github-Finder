import React,{Fragment,useEffect,useContext} from 'react';
import Spinner from '../../layouts/spinner/spinner';
import {Link} from 'react-router-dom';
import Repos from '../../Repos/Repos';
import GithubContext from '../../../context/github/githubContext';

const User = props=>{
  // componentDidMount(){
  //   this.props.getUser(this.props.match.params.login)
  //   this.props.getUserRepos(this.props.match.params.login)
  // }
  useEffect(()=>{
    githubContext.getUser(props.match.params.login);
    githubContext.getUserRepos(props.match.params.login);
     // eslint-disable-next-line
  },[]);

  const githubContext = useContext(GithubContext);
  const {user,repos,loading} = githubContext;

    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      company,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = user;

    if(loading) {
      return <Spinner/>
    }
    return(
      <Fragment>
          <Link to='/' className="btn btn-light">Back to Search</Link>
          Hireable: {' '}
          {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
          <div className="card grid-2">
            <div className="all-center">
              <img src={avatar_url} className="round-img" alt="Avatar" style={{width:'150px'}} />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div>
              {bio ?
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
              </Fragment>
              : <p>No Bio</p>
            }
            <a className="btn btn-dark my-1" href={html_url}>Visit Github Profile</a>
            <ul>
              <li>
                {
                  login ?<Fragment>
                    <strong>Username:</strong> {login}
                </Fragment>: null
                }
              </li>
              <li>
                {
                  company ?<Fragment>
                    <strong>Comapny:</strong> {company}
                </Fragment>: null
                }
              </li>
              <li>
                {
                  blog ?<Fragment>
                    <strong>Website:</strong> {blog}
                </Fragment>: null
                }
              </li>
            </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">Public Repos: {public_repos}</div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
          </div>
          <Repos />
      </Fragment>
    )

}

export default User;
