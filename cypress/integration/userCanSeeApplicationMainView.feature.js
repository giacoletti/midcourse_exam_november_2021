/* eslint-disable no-undef */
describe('Application main view', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('is expected to display header title', () => {
    cy.get('[data-cy=search-header]').should('contain', 'GitHub Search engine');
  });

  it('is expected to display input', () => {
    cy.get('[data-cy=gh-search-input]').should('be.visible');
  });

  it('is expected to display Search button', () => {
    cy.get('[data-cy=gh-search-button]').should('be.visible').and('contain.text', 'Search');
  });
});
