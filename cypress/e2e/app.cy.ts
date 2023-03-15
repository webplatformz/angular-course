describe('Tour of Heroes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('Initial page', () => {
    // has title 'Tour of Heroes'
    cy.title().should('eq', 'Tour of Heroes');
    // has h1 'Tour of Heroes'
    cy.get('h1').should('have.text', 'Tour of Heroes');
    // has views 'Dashboard' and 'Heroes'
    cy.get('nav').contains('a', 'Dashboard');
    cy.get('nav').contains('a', 'Heroes');
    // has dashboard as the active view
    cy.get('app-dashboard').should('be.visible');
  });

  it('Dashboard Tests', () => {
    // has top heroes
    cy.get('.heroes-menu > a').should('have.length', 4);
    // selects and routes to hero details
    cy.contains('Magneta').click();
    cy.get('h2').should('contain.text', 'MAGNETA Details');
    // updates hero name in details view
    cy.get('#hero-name').should('have.value', 'Magneta').type('X');
    cy.get('h2').should('contain.text', 'MAGNETAX Details');
    // cancels and shows hero in dashboard
    cy.contains('go back').click();
    cy.contains('magnetax', { matchCase: false }).should('not.exist');
    // selects and routes to hero details
    cy.get('.heroes-menu').within(() => {
      cy.contains('Magneta').click();
    });
    // updates hero name in details view
    cy.get('#hero-name').should('have.value', 'Magneta').type('Y');
    // saves and shows hero in Dashboard
    cy.contains('save').click();
    cy.get('.heroes-menu').within(() => {
      cy.contains('magnetay', { matchCase: false });
    });
  });

  it('Heroes tests', () => {
    // can switch to Heroes view
    cy.get('nav').contains('a', 'Heroes').click();
    cy.get('app-heroes').should('be.visible');
    cy.get('.heroes > li').should('have.length', 10);
    // can route to hero details
    cy.get('.heroes > li').contains('Magneta').click();
    // updates hero name in details view
    cy.get('#hero-name').should('have.value', 'Magneta').type('Z');
    cy.contains('save').click();
    // shows updated hero in Heroes list
    cy.get('.heroes > li').contains('MagnetaZ');
    // deletes hero from Heroes list
    cy.get('.heroes > li').contains('MagnetaZ').siblings('button.delete').click();
    cy.get('.heroes > li').should('have.length', 9);
    // adds back hero
    cy.get('#new-hero').type('Alice');
    cy.contains('add hero', { matchCase: false }).click();
    cy.get('.heroes > li').contains('Alice');
    cy.get('.heroes > li').should('have.length', 10);
    // displays correctly styled buttons
    cy.contains('button', 'x')
      .should('have.css', 'font-family', 'Arial, Helvetica, sans-serif')
      .and('have.css', 'border-top-style', 'none')
      .and('have.css', 'padding', '1px 10px 3px')
      .and('have.css', 'border-radius', '4px')
      .and('have.css', 'left', '210px')
      .and('have.css', 'top', '5px');
    cy.contains('button', 'add hero', { matchCase: false })
      .should('have.css', 'font-family', 'Arial, Helvetica, sans-serif')
      .and('have.css', 'border-top-style', 'none')
      .and('have.css', 'padding', '8px 24px')
      .and('have.css', 'border-radius', '4px');
  });

  it('Progressive hero search', () => {
    // search for 'Ma'
    cy.get('#search-box').type('Ma');
    cy.get('.search-result > li').should('have.length', 4);
    // continue search with 'g'
    cy.get('#search-box').type('g');
    cy.get('.search-result > li').should('have.length', 2);
    // continue search with 'n' and navigate to hero
    cy.get('#search-box').type('n');
    cy.get('.search-result > li').should('have.length', 1).and('contain.text', 'Magneta').click();
    cy.get('app-hero-detail').should('be.visible');
  });
});
