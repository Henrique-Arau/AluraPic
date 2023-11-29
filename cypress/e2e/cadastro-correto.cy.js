import Cadastro from '../support/pages/cadastro/pagina-cadastro'

describe('Página de cadastro', () => {

    beforeEach(() => { 
      cy.visit('http://localhost:4200/#/home')
    })
  
        it('Preencher os campos do formulario corretamente para cadastrar um novo usuário', () => {
      
          // cy.get('[data-test="register"]').click();
          // cy.get('[data-test="email"]').type('teste3@teste.com.br');
          // cy.get('[data-test="fullName"]').type('caio teste');
          // cy.get('[data-test="registerUserName"]').type('caiot');
          // cy.get('[data-test="registerPassword"]').type('caio1590');
          // cy.get('[data-test="btn"]').click();

          Cadastro.acessarPaginaDeCadastro();
          Cadastro.preencherFormulario();
          Cadastro.submeterCadastro();
        })
    })