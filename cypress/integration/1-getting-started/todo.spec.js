/// <reference types="cypress" />
import localforage from 'localforage'

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    localforage.clear()
  })

  it('displays a button with text "Adicionar arquivo" and click', () => {
    cy.get('[data-test-id="add-button"]').should('have.text', 'Adicionar arquivo')
    cy.get('[data-test-id="add-button"]').click()

    cy.get('ul li:first').should('have.text', 'Sem título')
  })

  it('should write the title', () => {
    cy.get('[data-test-id="add-button"]').click()

    cy.get('[data-test-id="header-title"]').click().type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}').type('Título').should('have.value', 'Título')
  })
})
