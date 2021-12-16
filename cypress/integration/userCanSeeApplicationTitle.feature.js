/* eslint-disable no-undef */
describe('Application main view', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('is expected to contain title', () => {
    cy.get("section[name='title']")
      .should('contain', 'GitHub Search engine')
  });
});