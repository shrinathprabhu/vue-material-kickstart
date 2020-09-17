// https://docs.cypress.io/api/introduction/api.html

describe('Fetch heading in Appbar', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h2', 'Vue Material Kickstart');
  });
});
