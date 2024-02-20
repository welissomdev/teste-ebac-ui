/// <reference types="cypress"/>

describe('funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    }); 

    it('Deve selecionar um produto da lista ', () => {
        cy.get('.product-block ')
        //.first()
        //.last()
        //.eq(2)
        .contains('Abominable Hoodie')
        .click()
        cy.get('#tab-description > :nth-child(1)').should('contain','It took CoolTech™ weather apparel know-how and lots of wind-resistant fabric to get the Abominable Hoodie just right.')
    });

});