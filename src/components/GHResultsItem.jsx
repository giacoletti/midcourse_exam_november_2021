import React from 'react';
import { Card } from 'semantic-ui-react';

const GHResultsItem = ({ searchItem }) => {
  return (
    <Card
    data-cy={`gh-search-item-${searchItem.id}`}
    href={searchItem.html_url}
    image={searchItem.avatar_url}
    header={searchItem.login}
    />
  )
};

export default GHResultsItem;
