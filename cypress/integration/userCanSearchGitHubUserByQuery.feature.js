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
});