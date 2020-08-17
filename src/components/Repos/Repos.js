import React,{useContext} from 'react';
import RepoItem from './repoItem';
import GithubContext from '../../context/github/githubContext';
const Repo = () => {
  const githubContext = useContext(GithubContext);
  const {repos} = githubContext;
  return repos.map(repo=>(
    <RepoItem key={repo.id} repo={repo} />
  ))
}

export default Repo
