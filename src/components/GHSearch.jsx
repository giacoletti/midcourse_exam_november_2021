import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import GitHubAPI from '../modules/GitHubAPI';
import { useDispatch } from 'react-redux';

const GHSearch = () => {
  const [userSearch, setUserSearch] = useState();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUserSearch(event.target.value);
  };

  const searchUsers = async () => {
    const results = await GitHubAPI.searchUsers(userSearch);
    dispatch({ type: 'SET_SEARCH_RESULTS', payload: results });
    if (!results.length) {
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: 'No results has been found' });
    }
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
