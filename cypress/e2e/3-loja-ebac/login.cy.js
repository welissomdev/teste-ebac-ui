/// <reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe('funcionalidade: login', () => {

beforeEach(() => {
    cy.visit('minha-conta')
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

    it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, welyssom (não é welyssom? Sair)')
    
    });
    it.only('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario, {log:false})
        cy.get('#password').type(dados.senha, {log:false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, welyssom (não é welyssom? Sair)')
    
        })
    });
})
