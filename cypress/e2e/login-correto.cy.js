describe('Página de cadastro', () => {

  beforeEach(() => { 
    cy.visit('http://localhost:4200/#/home')
  })

    it('Preencher os campos do login corretamente para realizar login', () => {
      cy.get('[data-test="loginUserName"]').type('testecy');
      cy.get('[data-test="loginPassword"]').type('teste125');
      cy.contains('button', 'login').click();
      
    })
  })