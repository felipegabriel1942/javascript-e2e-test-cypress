// /// <reference types="cypress"/>

// describe('Login Page', () => {

//     beforeEach(() => {
//         cy.visit('http://localhost:4200/');
//     });

//     it.only('Should attempt to login', () => {
//         const usuario = 'davyla.maria';
//         const senha = '123';

//         cy.get('#login')
//             .type(usuario)
//             .should('have.value', usuario);

//         cy.get('#senha')
//             .type(senha)
//             .should('have.value', senha);
        
//         cy.get('form.ng-dirty > .btn').click();
//     });

//     it('Should show a error message invalid mail', () => {
//         const email = 'email_inválido';

//         cy.get('#mat-input-0')
//             .type(email)
//             .should('have.value', email);

//         cy.get('.card-login').click();

//         cy.get('#mat-error-0').should('exist');
//     });

// });