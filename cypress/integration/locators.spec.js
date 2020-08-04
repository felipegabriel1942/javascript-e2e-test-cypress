/// <reference types="cypress"/>

describe('Locators', () => {

    before(() => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

    });

    beforeEach(() => {

        cy.reload();

    });

    it('Using jquery selector', () => {

        cy.get(':nth-child(1) > :nth-child(3) > [type=button]'); 
        
    });


    it('Using xpath', () => {

        cy.xpath(`//input[contains(@onclick, 'Francisco')]`);

    });
});