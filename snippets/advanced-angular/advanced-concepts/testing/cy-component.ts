import { HeroDetailComponent } from 'src/app/hero-detail/hero-detail.component';

describe('Hero Detail Component', () => {
  beforeEach(() => {
    cy.mount(HeroDetailComponent);
  });

  it('Site content', () => {
    cy.get('label').contains('Hero name: ');
    cy.get('#hero-name').should('have.attr', 'placeholder', 'Hero name');
  });
});
