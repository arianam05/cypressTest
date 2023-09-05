/// <reference types="Cypress"/>

import toolsQA from "../../pages/toolsQA"
describe('Pruebas basicas de login', () => {

    it('Login with correct credentials', () => {
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin')
     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
     cy.get('button').click()
     cy.get('.oxd-topbar-header-title').should('be.visible').contains('Dashboard')
    })


    it('Login with incorrect username', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
        cy.get('button').click()
        cy.get('.oxd-alert-content').should('be.visible').contains('Invalid credentials')
    })

    it('Login with incorrect username', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
        cy.get('button').click()
        cy.get('.oxd-alert-content').should('be.visible').contains('Invalid credentials')
    })


})