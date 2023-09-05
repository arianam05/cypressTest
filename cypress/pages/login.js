class toolsQA {

   //URL

   Url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

   // this section contain every element 
    name = '#firstName';
    lastName = '#lastName';

   // methods section with every path

   getlogin(){
    cy.visit(this.Url);
    cy.get()
   }

}
export default toolsQA;