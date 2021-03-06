import React,{Fragment} from 'react';
import Spinner from '../../layouts/spinner/spinner';
import {Link} from 'react-router-dom';
import Repos from '../../Repos/Repos';

class User extends React.Component {
  componentDidMount(){
    this.props.getUser(this.props.match.params.login)
    this.props.getUserRepos(this.props.match.params.login)
  }
  render () {
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
    } = this.props.user;
    const {loading,repos} = this.props
    console.log(this.props.user);
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
          <Repos repos={repos} />
      </Fragment>
    )
  }
}

export default User;
