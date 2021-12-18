import React from 'react';
import Header from './components/Title';
import GHSearch from './components/GHSearch';
import { Container, Grid, Message } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import GHResultsItem from './components/GHResultsItem';

const App = () => {
  const { searchResults, errorMessage } = useSelector((state) => state);

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
      <Header />
      <GHSearch />
      <Grid data-cy="gh-search-list">
        {searchResultsList.length === 0 && errorMessage ?
          <Message data-cy="warning-message" warning compact header={errorMessage} /> :
          searchResultsList
        }
      </Grid>
    </Container>
  );
};

export default App;
