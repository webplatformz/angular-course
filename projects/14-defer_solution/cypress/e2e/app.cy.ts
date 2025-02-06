describe('Defer Section', () => {
  beforeEach(() => {
    cy.readFile('../../api/db.json').then(db => {
      cy.writeFile('../../api/db.json.bak', db);
    });
  });

  afterEach(() => {
    cy.readFile('../../api/db.json.bak').then(db => {
      cy.writeFile('../../api/db.json', db);
    });
  });

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('Viewport Tests', () => {
    cy.visit('http://localhost:4200/viewport');

    // Ensure the initial state before scrolling
    cy.get('app-stopwatch').should('have.length', 1);
    cy.get('.placeholder').should('be.visible');

    // Scroll to the bottom
    cy.scrollTo('bottom');

    // Ensure the second stopwatch is loaded
    cy.get('app-stopwatch').should('have.length', 2);

    // Assert that the placeholder is no longer in the DOM
    cy.get('.placeholder').should('not.exist');
  });

  it('Interaction Tests', () => {
    cy.visit('http://localhost:4200/interaction');

    // Ensure the initial state before scrolling
    cy.get('app-stopwatch').should('have.length', 1);
    cy.get('.placeholder').should('be.visible');

    // Click the interaction button
    cy.get('button')
      .should('be.visible') // Ensure it's visible
      .should('not.be.disabled') // Ensure it's clickable
      .click();

    // Ensure the second stopwatch is loaded
    cy.get('app-stopwatch').should('have.length', 2);

    // Assert that the placeholder is no longer in the DOM
    cy.get('.placeholder').should('not.exist');
  });

  it('Loading Tests', () => {
    cy.visit('http://localhost:4200/loading');

    // Ensure the initial state before scrolling
    cy.get('app-stopwatch').should('have.length', 1);
    cy.get('.placeholder').should('be.visible');

    // Click the interaction button
    cy.get('button')
      .should('be.visible') // Ensure it's visible
      .should('not.be.disabled') // Ensure it's clickable
      .click();

    // Ensure "Is loading" text appears
    cy.get('p').contains('loading').should('be.visible');

    // Wait for the minimum loading time (5 seconds)
    cy.wait(5000);

    // Ensure the second stopwatch is loaded
    cy.get('app-stopwatch').should('have.length', 2);

    // Assert that the placeholder & loading msg is no longer in the DOM
    cy.get('.placeholder').should('not.exist');
    cy.get('p').contains('🔄 Is loading for at least 5 secs...').should('not.exist');
  });
});
