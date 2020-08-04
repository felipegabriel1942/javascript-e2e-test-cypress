/// <reference types="cypress"/>

import loc from '../../support/locators';
import '../../support/commandsContas';

describe('Should test at a functional level', () => {

    before(() => {

        cy.login('pinheiro_felipeg@yahoo.com.br', '123');

        cy.resetApp();

    });

    beforeEach(() => {

        cy.acessarMenuConta();

    });

    it('Should create an account', () => {

        cy.inserirConta('Conta de teste');

        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!');

    });

    it('Should update an account', () => {

        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click();

        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta alterada');
        
        cy.get(loc.CONTAS.BTN_SALVAR).click();

        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!');

    });

    it('Should not create an account with same name', () => {

        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta alterada');

        cy.get(loc.CONTAS.BTN_SALVAR).click();

        cy.get(loc.MESSAGE).should('contain', 'code 400');
    });

    it('Should create a transaction', () => {

        cy.get(loc.MENU.MOVIMENTACAO).click();

        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc');

        cy.get(loc.MOVIMENTACAO.VALOR).type('123');

        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Inter');

        cy.get(loc.MOVIMENTACAO.STATUS).click();

        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click();

        cy.get(loc.MESSAGE).should('contain', 'sucesso');

        cy.get(loc.EXTRATO.LINHAS).should('have.length', 7);

        cy.xpath(loc.EXTRATO.XP_BUSCA_ELEMENTO).should('exist');

    });
});




