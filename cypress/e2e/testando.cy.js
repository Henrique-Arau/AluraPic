describe('Página de cadastro', () => {
  it('Preencher os campos do formulario corretamente para cadastrar um novo usuário', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('teste@email.com.br');
    cy.get('[data-test="fullName"]').type('Teste Alura Test Cypress');
    cy.get('[data-test="registerUserName"]').type('testecy');
    cy.get('[data-test="registerPassword"]').type('teste125');
    cy.contains('button', 'Register').click();
  })
})