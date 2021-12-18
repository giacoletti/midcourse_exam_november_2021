describe('A user can see a warning message if no search results has been found', () => {
  before(() => {
    cy.intercept('GET', 'https://api.github.com/search/users**', {
      fixture: "emptyResponse.json"
    }).as('userSearch');
    cy.visit('/');
    cy.get('[data-cy=gh-search-input]').type('fdsfsadfsdfdsa');
    cy.get('[data-cy=gh-search-button]').click();
  });

  it('is expected to return an empty array', () => {
    cy.wait('@userSearch').its('response.body.items').should('have.length', 0);
  });

  it('is expected to display warning message "No results has been found"', () => {
    cy.get('[data-cy=warning-message]').should('contain.text', 'No results has been found');
  });
});