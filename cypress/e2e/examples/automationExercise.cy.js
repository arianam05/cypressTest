/// <reference types="Cypress"/>

// suite de casos que contiene cada caso
describe('Conjunto de pruebas parte 1', () => {
     
    beforeEach(()=> {
      //Ingresar a la pagina
      cy.visit('https://automationexercise.com/products')
    })

    // caso de prueba 1
    it('ingresar a la pagina y contar elementos, uso de alias', () => {
        //verificar cantidad de elementos
        cy.get('.features_items > .col-sm-4').should('have.length',34)
        //parametrizando elementos , usamos alias con as
        cy.get('.features_items > .col-sm-4').as('ProductosPrincipales')
        //verificar cantidad de elementos con el parametro, usando have.length
        cy.get('@ProductosPrincipales').should('have.length',34)
    })

    // caso de prueba 2
    it('agregar producto al carro de compra, uso de each', () => {
        //parametrizando elementos , usamos alias con as
        cy.get('.features_items > .col-sm-4').as('DetallesProductos')
        //iteramos para manipular elementos con each
        cy.get('@DetallesProductos')
        .find('.productinfo')
        .each(($el, index, $list) => {
            const name = $el.find('p').text()
            const price = $el.find('h2').text()
            if(name === 'Winter Top' && price === 'Rs. 600'){
                cy.log('Se ha encontrado el elemento buscado ' + name + ' y ' + price)
                cy.get('.btn').eq(index).contains('Add to cart').click()   
            }
        })
        cy.get('.modal-body').find('.text-center').should('contain.text','Your product has been added to cart.').should('be.visible')
        cy.get('.modal-footer > .btn').click()
        cy.get('.title').should('contain.text','All Products').should('be.visible')
    })

})