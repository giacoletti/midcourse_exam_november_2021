describe('Visiting the application, a user can type a keyword in the search input and click "Search" button', () => {
  before(() => {
    cy.intercept('GET', 'https://api.github.com/search/users**', {
      fixture: "searchUserResponse.json"
    }).as('userSearch');
    cy.visit('/');
    cy.get('[data-cy=gh-search-input]').type('barack');
    cy.get('[data-cy=gh-search-button]').click();
  });

  it('is expected to return an array of data', () => {
    cy.wait('@userSearch').its('response.body.items').should('be.an', 'array');
  });

  describe('can see list of results on screen', () => {
    it('is expected to see 30 list items', () => {
      cy.get('[data-cy=gh-search-list]').children().should('have.length', 30);
    });

    it('is expected to see first github search result as a Card with picture and username', () => {
      cy.get('[data-cy=gh-search-item-1]').within(() => {
        cy.get('.image').should('be.visible');
        cy.get('.header').should('contain.text', 'Barack');
        // cy.get('href').should('contain.text', 'https://github.com/Barack');
      });
    });
  });
});