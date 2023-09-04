class toolsQA {

   //URL

   toolQAUrl = 'https://demoqa.com/automation-practice-form';

   // this section contain every element 
    name = '#firstName';
    lastName = '#lastName';
    email = '#userEmail';
    phone = '#userNumber';
    dobBtn = '#dateOfBirthInput';
    month = '.react-datepicker__month-select';
    year = '.react-datepicker__year-select';
    subject = '.subjects-auto-complete__value-container';
    upload = '#uploadPicture';
    currentAddress = '#currentAddress';
    state = '#state';
    city = '#city';
    submit = '#submit';

   // methods section with every path

   getNavigate(){
    cy.visit(this.toolQAUrl);
   }

   getName(firstName){
    cy.get(this.name).type(firstName);
   }

   getLastName(last){
    cy.get(this.lastName).type(last);
   }

   getemail(mail){
    cy.get(this.email).type(mail);
   }

   getphone(cel){
    cy.get(this.phone).type(cel);
   }

   getDob(){
    cy.get(this.dobBtn).click();
   }

   getMonth(){
    cy.get(this.month);
   }

   getYear(){
    cy.get(this.year);
   }

   getsubjetct(sub){
    cy.get(this.subject).type(sub);
   }

   getFile(){
     cy.get(this.upload);
   }

   getAddres(addres){
    cy.get(this.currentAddress).type(addres);
   }

   getSate(){
    cy.get(this.state).click();
   }

   getCity(){
    cy.get(this.city).click();
   }

   getSubmit(){
    cy.get(this.submit).click({ force: true});
   }

}
export default toolsQA;