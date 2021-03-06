/// <reference types="cypress"/>

describe('Work with basic elements', () => {

    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    });

    beforeEach(() => {
        cy.reload();
    })

    it('Text', () => {

        cy.get('body').should('contain', 'Cuidado');

        cy.get('span').should('contain', 'Cuidado');

        cy.get('.facilAchar').should('contain', 'Cuidado');

    });

    it('Links', () => {

        cy.get('[href="#"]').click();

        cy.get('#resultado').should('have.text', 'Voltou!');
    });

    it('Text Fields', () => {

        const nome = cy.get('#formNome');

        nome.type('Felipe');

        nome.should('have.value', 'Felipe');

        const sugestoes = cy.get('#elementosForm\\:sugestoes');

        sugestoes.type('textarea').should('have.value', 'textarea');

        const tabelaUsuarioRow1 = cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input');

        tabelaUsuarioRow1.type('Teste');

        const sobrenome = cy.get('[data-cy=dataSobrenome]');

        sobrenome.type('Teste12345{backspace}{backspace}');

        sugestoes
            .clear()
            .type('Erro{selectAll}acerto', {delay: 100})
            .should('have.value', 'acerto');

    });

    it('RadioButton', () => {

        cy.get('#formSexoFem')
            .click()
            .should('be.checked');

        cy.get('#formSexoMasc')
            .should('not.be.checked');

        cy.get(`[name='formSexo']`).should('have.length', 2);
    });

    it('CheckBox', () => {

        cy.get('#formComidaPizza')
            .click()
            .should('be.checked');

        cy.get('[name=formComidaFavorita]')
            .click({multiple: true});

        cy.get('#formComidaPizza')
            .should('not.be.checked');

        cy.get('#formComidaVegetariana')
            .should('be.checked');
    });

    it('Combo', () => {

        cy.get('[data-test=dataEscolaridade]')
            .select('2graucomp')
            .should('have.value', '2graucomp');

        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp');

        cy.get('[data-test=dataEscolaridade] option')
            .should('have.length', 8);

        cy.get('[data-test=dataEscolaridade] option').then($arr => {

            const values = [];

            $arr.each(function() {
                values.push(this.innerHTML);
            });

            expect(values).to.include.members(['Superior', 'Mestrado']);
        });

    });

    it('Combo multiplo', () => {

        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada']);

        // cy.get('[data-testid=dataEsportes]').should('have.value', ['natacao']);

        cy.get('[data-testid=dataEsportes]').then($el => {

            expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada']);

            expect($el.val()).to.have.length(3);

        });

    });

});