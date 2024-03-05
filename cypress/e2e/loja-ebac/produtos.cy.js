/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('funcionalidade: Produtos', () => {

    beforeEach(() => {
       
        produtosPage.visitarUrl()
    }); 

    it('Deve selecionar um produto da lista ', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-description > :nth-child(1)').should('exist')
    });

    it('Deve buscar um produto com sucesso ', () => {
        produtosPage.buscarProduto('Abominable Hoodie')
        cy.get('.product_title').should('contain','Abominable Hoodie')
    });
    
    it('Deve visitar a página do produtos', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain','Zeppelin Yoga Pant')
    });

    it('Deve adicionar produtos ao carinho', () => {
        let qtd = 3 
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarinho('XS','Black', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produtos ao carinho buscando da massa de dados', () => {
         cy.fixture('produtos').then(dados =>{
            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade,)
            cy.get('.woocommerce-message').should('contain',dados[2].nomeProduto)
        })
       
        
    });

});
