const el = require('./elements').elements;

class Cadastro {
    acessarPaginaDeCadastro() {
        cy.visit('http://localhost:4200/#/home');
        cy.get('[data-test="register"]').click();
    }

    preencherFormulario() {
        cy.get('[data-test="email"]').type('teste3@teste.com.br');
        cy.get('[data-test="fullName"]').type('davi teste');
        cy.get('[data-test="registerUserName"]').type('davit');
        cy.get('[data-test="registerPassword"]').type('davi1470');
    }

    submeterCadastro() {
        cy.get('[data-test="btnRegister"]').click();
    }
}


export default new Cadastro();