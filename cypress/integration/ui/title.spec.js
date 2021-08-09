describe('Bookish application', () => {
  it('Visits the bookish', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h2[data-test="heading"]').contains('Magicians');
  });
});
