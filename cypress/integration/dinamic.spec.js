/// <reference types="cypress"/>

describe('Dynamic Test', () => {

    before(() => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

    });
    

    const food = ['Carne', 'Frango', 'Pizza', 'Vegetariano'];

    it('Cadastro com comida variada', () => {

        cy.get('#formNome').type('Usuario');

        cy.get('[data-cy=dataSobrenome]').type('Sobrenome');

        cy.get(`[name=formSexo][value=F]`).click();

        cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click();

        cy.get('#formEscolaridade').select(this.usuario.escolaridade);

        cy.get('#formEsportes').select(this.usuario.esportes);

        cy.get('#formCadastrar').click();

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!');
    });

});