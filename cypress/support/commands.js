

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("selectProduct", (nombreDeProducto) => {
    cy.get(".features_items > .col-sm-4").as("contenedorDeProductos")
    cy.get("@contenedorDeProductos")
        .find('.productinfo')
        .each(($el, index, $list) => {
            let producto = $el.text()
            if (producto.includes(nombreDeProducto)) {
                cy.log('Se ha encontrado el elemento buscado')
                cy.get('@contenedorDeProductos').eq(index).find('.choose').click()
                cy.get('.product-information > h2').should('contain.text', nombreDeProducto)
            }

        })
})
