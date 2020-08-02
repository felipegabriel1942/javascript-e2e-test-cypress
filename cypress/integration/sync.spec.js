/// <reference types="cypress"/>

describe('Esperas...', () => {

    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    });

    beforeEach(() => {
        cy.reload();
    });

    it('Deve aguardar element estar disponivel', () => {

        cy.get('#novoCampo').should('not.exist');

        cy.get('#buttonDelay').click();

        cy.get('#novoCampo').should('not.exist');

        cy.get('#novoCampo').should('exist');

        cy.get('#novoCampo').type('funciona');
    });

    it('Deve fazer retrys', () => {

        cy.get('#buttonDelay').click();

        cy.get('#novoCampo').should('exist'); 

        cy.get('#novoCampo').type('funciona');
    });


    it.only('Uso do find', () => {

        cy.get('#buttonList').click();

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1');

        cy.get('#lista li span')
            .should('contain', 'Item 2');
    });

    it.only('Uso do timeout', () => {

        // cy.get('#buttonDelay').click();

        // cy.get('#novoCampo', { timeout: 1000 }).should('exist');

        // cy.get('#novoCampo').should('exist');

        // cy.wait(5000);

        cy.get('#buttonListDOM').click();

        cy.get('#lista li span')
            .should('have.length', 2);
    });

    it.only('Click retry', () => {
        
        cy.get('#buttonCount')
            .click().should('have.value', '1');
    });

    it.only('Should vs Then', () => {

        cy.get('#buttonListDOM').then($el => {

            expect($el).to.have.length(1);

        }).and('have.id', 'buttonListDOM');

    });
    
});
