/// <reference types="cypress"/>

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

        cy.title().should('be.equal', 'Campo de Treinamento').debug();
        
        // cy.title().should('contain', 'Campo');

        // cy.title()
        //     .should('be.equal', 'Campo de Treinamento')
        //     .and('contain', 'Campo');

    });

    it('Should find and interact with an element', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

        const button = cy.get('#buttonSimple');

        button.click();

        button.should('have.value', 'Obrigado!');
    });
});
