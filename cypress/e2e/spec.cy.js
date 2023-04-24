describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/dashboard-hotel-miranda')
    cy.get('input[name=username]').type('Xymenes Hallas')
    cy.get('input[name=password]').type('100')
    cy.get('#cypress-login').click()
    cy.get('#cypress-logout')
  })
})