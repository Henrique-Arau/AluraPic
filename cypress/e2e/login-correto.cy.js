describe('Página de cadastro', () => {
    it('Preencher os campos do login corretamente para realizar login', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.get('[data-test="loginUserName"]').type('testecy');
      cy.get('[data-test="loginPassword"]').type('teste125');
      cy.contains('button', 'login').click();
    })
  })