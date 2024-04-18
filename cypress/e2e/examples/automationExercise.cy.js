/// <reference types="Cypress"/>

import { Fixtures } from '../../fixtures/data'
import contact from '../../pages/contactUs';
import product from '../../pages/productView';
import register from '../../pages/registerLogin';


// suite de casos que contiene cada caso
describe('Conjunto de pruebas parte 1', () => {
    const currentPaylod = Fixtures.valid;
    const producto = new product; 
    const registro = new register; 
    const contacto = new contact


    beforeEach(() => {
        //Ingresar a la pagina
        cy.visit('https://automationexercise.com/')
    })

    it('add cart commands', () => {
        const emailTest = `cypressTest${Date.now()}@gmail.com`;
        currentPaylod.email = emailTest;

        cy.selectProduct('Blue Cotton Indie Mickey Dress');
        cy.get(producto.quantity).clear().type(30)
        cy.get(producto.addCartBtn).click().wait(1000)
        cy.get(producto.modalConfirm).find('u').should('contain.text', 'View Cart').click()
        cy.get(producto.checkoutBtn).should('contain.text', 'Proceed To Checkout').click()
        cy.get(producto.registesLoginBtn).should('contain.text', 'Register / Login').click()
        cy.get(producto.signForm).should('be.visible')
        cy.get(registro.sigName).type(currentPaylod.name)
        cy.get(registro.sigEmail).type(currentPaylod.email)
        cy.get(registro.signBtn).click()
        cy.get(registro.formTittle).should('contain.text', 'Enter Account Information')
        cy.get(registro.passwordBtn).type(currentPaylod.password)
        cy.get(registro.day).select(currentPaylod.day)
        cy.get(registro.month).select(currentPaylod.month)
        cy.get(registro.year).select(currentPaylod.year)
        cy.get(registro.firstName).type(currentPaylod.name)
        cy.get(registro.lastName).type(currentPaylod.lastName)
        cy.get(registro.address).type(currentPaylod.address)
        cy.get(registro.country).select(currentPaylod.country)
        cy.get(registro.state).type(currentPaylod.state)
        cy.get(registro.city).type(currentPaylod.city)
        cy.get(registro.zip).type(currentPaylod.zip)
        cy.get(registro.phone).type(currentPaylod.phone)
        cy.get(registro.createBtn).click()
        cy.get(registro.accountCreatedTittle).should('contain.text', 'Account Created!')
        cy.get(registro.continueBtn).click()
        cy.get(registro.cartBtn).click()
        cy.get(producto.checkoutBtn).should('contain.text', 'Proceed To Checkout').click()
        cy.get(registro.placeorderBtn).should('contain.text', 'Place Order').click()
        cy.get(registro.tittle).should('contain.text', 'Payment')
        cy.get(registro.fullName).type(currentPaylod.fullName)
        cy.get(registro.cardNum).type(currentPaylod.cardNumber)
        cy.get(registro.cvc).type(currentPaylod.cvc)
        cy.get(registro.expireMonth).type(currentPaylod.expireMonth)
        cy.get(registro.expireYear).type(currentPaylod.expireYear)
        cy.get(registro.payBtn).click()
        cy.get(registro.orderPlaceTittle).should('contain.text', 'Order Placed!')
        cy.get(registro.continueBtn).click()
        cy.get(registro.logoutLoginBtn).click()
        cy.get(registro.loginBtnOutside).should('contain.text', 'Signup / Login')
    })

    it('login', () => {
        cy.get(registro.logoutLoginBtn).should('contain.text', 'Signup / Login').click()
        cy.get(registro.loginForm).should('be.visible')
        cy.get(registro.loginEmail).type(currentPaylod.email)
        cy.get(registro.passwordLogin).type(currentPaylod.password)
        cy.get(registro.loginBtn).click()
        cy.get(registro.logoutLoginBtn).should('contain.text', 'Logout')
        cy.get(contacto.contactBtn).click()
        cy.get(contacto.contactTittle).should('contain.text', 'Contact Us')
        cy.get(contacto.contactName).type(currentPaylod.fullName)
        cy.get(contacto.contactEmail).type(currentPaylod.email)
        cy.get(contacto.contactSubject).type(currentPaylod.subject)
        cy.get(contacto.contactMessage).type(currentPaylod.message)
        cy.get(contacto.uploadFileBtn).selectFile({
            contents: 'cypress/fixtures/gatos.jpg',
            fileName: 'gatos.jpg',
            mimeType: 'image/jpg'
        }, { force: true })
        cy.get(contacto.contactSubmit).click()
        cy.get(contacto.contactStatus).should('contain.text', 'Success! Your details have been submitted successfully.')
        cy.get(registro.logoutLoginBtn).click()
        cy.get(registro.loginBtnOutside).should('contain.text', 'Signup / Login')
    })

})