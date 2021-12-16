import React, { useState } from 'react';
import Header from './components/Title';
import GHSearch from './components/GHSearch';
import { Container, Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import GHResultsItem from './components/GHResultsItem';

const App = () => {
  const { searchResults } = useSelector(state => state);

  const searchResultsList = searchResults.map((searchItem, index) => {
    searchItem.id = index + 1;
    return (
      <div key={searchItem.id}>
        <GHResultsItem searchItem={searchItem} />
      </div>
    );
  });

  return (
    <Container>
      <section name="title">
        <Header />
      </section>
      <section name="main">
        <GHSearch />
      </section>
      <Grid data-cy="gh-search-list">
        {searchResultsList}
      </Grid>
    </Container>
  );
};

export default App;
