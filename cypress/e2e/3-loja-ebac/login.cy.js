/// <reference types="cypress"/>

describe('funcionalidade: login', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

afterEach(() => {
    cy.screenshot()
});

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('welyssom@gmail.com')
        cy.get('#password').type('qawsedrftgyhujikolpç')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, welyssom (não é welyssom? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
        cy.get('#username').type('welysom@gmail.com')
        cy.get('#password').type('qawsedrftgyhujikolpç')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')  
    });
 
    it('Dve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('welyssom@gmail.com')
        cy.get('#password').type('awsedrftgyhujikolpç')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });
  
})
