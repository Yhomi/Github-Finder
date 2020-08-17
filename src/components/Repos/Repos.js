import React from 'react';
import RepoItem from './repoItem';

const Repo = ({repos}) => {
  return repos.map(repo=>(
    <RepoItem key={repo.id} repo={repo} />
  ))
}

export default Repo
