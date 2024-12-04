describe('Tour of Heroes', () => {
  // arrange
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('Dashboard', () => {
    // act
    cy.contains('Magneta').click();

    // assert
    cy.get('h2').should('contain.text', 'MAGNETA Details');

    // assert and act mixed
    cy.get('#hero-name').should('have.value', 'Magneta');
    cy.get('#hero-name').type('X');
    cy.get('h2').should('contain.text', 'MAGNETAX Details');
  });
});
