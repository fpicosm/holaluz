// https://docs.cypress.io/api/table-of-contents

describe('Home Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('input').invoke('attr', 'placeholder').should('equal', 'Insert CUPS here')
    cy.get('button').should('contain', 'Search')
  })

  it('Submit form to result page', () => {
    cy.visit('/')
    cy.get('form').then(
      ($form) => expect($form[0].checkValidity()).to.be.false
    )
    cy.get('button[type=submit]').click()
    cy.get('input').invoke('prop', 'validationMessage').should('equal', 'Completa este campo')

    cy.get('input').type('123456')
    cy.get('form').then(
      ($form) => expect($form[0].checkValidity()).to.be.true
    )
    cy.get('button[type=submit]').click()

    cy.url().should('include', 'search?cups=123456')
  })
})
