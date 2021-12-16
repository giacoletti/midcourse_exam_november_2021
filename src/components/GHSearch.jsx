import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import GitHubAPI from '../modules/GitHubAPI';

const GHSearch = () => {
  const [userSearch, setUserSearch] = useState();

  const handleChange = (event) => {
    setUserSearch(event.target.value);
  };

  const searchUsers = async () => {
    const results = await GitHubAPI.searchUsers(userSearch);
  }

  return (
    <>
      <Input
        data-cy="gh-search-input"
        type="text"
        name="search"
        onChange={handleChange}
        placeholder="Input GH username" />
      <Button
        data-cy="gh-search-button"
        onClick={searchUsers}
        name="search">Search</Button>
    </>
  );
};

export default GHSearch;
