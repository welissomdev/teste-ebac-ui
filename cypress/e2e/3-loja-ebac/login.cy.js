/// <reference types="cypress"/>

describe('funcionalidade: login', () =>(
    it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('welyssom@gmail.com')
    cy.get('#password').type('qawsedrftgyhujikolpç')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, welyssom (não é welyssom? Sair)')
    })
))
