/// <reference types="Cypress"/>
import toolsQA from "../../pages/toolsQA"

// suite de casos que contiene cada caso
describe('ToolsQA Test', () => {
    const tQA = new toolsQA

    before(()=> {
        //Usamos fixture, cargamos los datos de un archivo de datos .json
        //usamos el then
        cy.fixture('example').then(function (datos) {
           this.datos = datos
           cy.fixture(this.datos.image).as('imagen')
        })
    })

    beforeEach(()=> {

        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
        });
        //Ingresar a la pagina
        tQA.getNavigate();
    })

    // caso de prueba seccion 2
     it('completar formulario manejando diferentes tipo de elementos', function ()  {
        //usamos this pero hay que colocar function
        tQA.getName(this.datos.name);
        tQA.getLastName(this.datos.lastName);
        tQA.getemail(this.datos.email);
        //usaremos force true cuando el elemento esta cubierto por otro
        // mandamos un valor como parametro, en este caso el valor del sexo
        cy.get('input[name="gender"][value="'+ this.datos.sex +'"]').check({ force: true}).should('be.checked')
        tQA.getphone(this.datos.phone)
        tQA.getDob()
         // tomando datos de arreglos en el json
         cy.get('.react-datepicker__month-select').should('be.visible').select(this.datos.DOB[0])
         cy.get('.react-datepicker__year-select').should('be.visible').select(this.datos.DOB[1])
         cy.get('.react-datepicker__day--0'+this.datos.DOB[2]).should('be.visible').click()
         // validaremos que tenga solo las primeras 3 letras con el substring
         cy.get('#dateOfBirthInput')
         .should('contain.value',this.datos.DOB[0].substring(0,3))
         .should('contain.value',this.datos.DOB[1])
         .should('contain.value',this.datos.DOB[2])
        // se trabajo dropdowns que se autocompletan
        tQA.getsubjetct(this.datos.subject)
        cy.get('div[id^="react-select-"]').click()
        cy.get('.subjects-auto-complete__value-container').should('contain.text', this.datos.subject)
        // se uso el has que ayuda a buscar elementos, en este caso se dijo has (tiene) un label que contiene
        cy.get("div[class='custom-control custom-checkbox custom-control-inline']:has(label:contains('" + this.datos.hobbies[0] + "')) input").check({ force: true }).should('be.checked')
        cy.get("div[class='custom-control custom-checkbox custom-control-inline']:has(label:contains('" + this.datos.hobbies[1] + "')) input").check({ force: true }).should('be.checked')

        // metodo para subir un archivo
        cy.get('#uploadPicture').then(function ($el) {
            //convertir la imagen en un string de base64
            const blob = Cypress.Blob.base64StringToBlob(this.imagen, 'image/png')
 
            const file = new File([blob], this.datos.image, { type: 'image/png' })
            const list = new DataTransfer()
 
            list.items.add(file)
            const myFileList = list.files
 
            $el[0].files = myFileList
            $el[0].dispatchEvent(new Event('change', { bubbles: true }))
        })
       
        tQA.getAddres(this.datos.address)
        cy.get('#state').click().find("div:contains('" + this.datos.state + "')[id*='react-select']").should('be.visible').click()
        cy.get('#city').click().find("div:contains('" + this.datos.city + "')[id*='react-select']").should('be.visible').click()
        tQA.getSubmit()
        
        //Aserciones
 
        cy.get('#example-modal-sizes-title-lg')
        .should('have.text', 'Thanks for submitting the form')
 
        cy.get('td:contains(Student Name) +td')
        .should('have.text', this.datos.name + " " + this.datos.lastName)
 
        cy.get('td:contains(Student Email) +td')
        .should('have.text', this.datos.email)
 
        cy.get('td:contains(Gender) +td')
        .should('have.text', this.datos.sex)
 
 
        cy.get('td:contains(Mobile) +td')
        .should('have.text', this.datos.phone)
 
 
        cy.get('td:contains(Date of Birth) +td')
        .should('have.text', this.datos.DOB[2] + " "
                + this.datos.DOB[0] + ","
                + this.datos.DOB[1])
 
 
        cy.get('td:contains(Subjects) +td')
        .should('have.text', this.datos.subject)
 
 
        cy.get('td:contains(Hobbies) +td')
        .should('have.text', this.datos.hobbies[0] + ", " + this.datos.hobbies[1])
 
 
        cy.get('td:contains(Picture) +td')
        .should('have.text', this.datos.image)
 
 
        cy.get('td:contains(Address) +td')
        .should('have.text', this.datos.address)
 
 
        cy.get('td:contains(State and City) +td')
        .should('have.text', this.datos.state + " " + this.datos.city)
    


     })



})