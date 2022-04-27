describe('Smoke Test', () => {
  it('can view the home papge', () => {
    cy.visit('/');
    cy.contains('Learn React');
  });
});
