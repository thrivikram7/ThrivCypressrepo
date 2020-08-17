describe('My First Test',function(){
    
    //Protractor demo application for Angular JS "https://juliemr.github.io/protractor-demo/"
    it('Verify Julimer Title Negative Test case',function(){
        cy.visit("https://juliemr.github.io/protractor-demo/")
        cy.title().should('eq','hello Julimer')
    })
    //Super Calculator
    it('Verify Julimer Title Postitive Test case',function(){
        cy.visit("https://juliemr.github.io/protractor-demo/")
        cy.title().should('eq','Super Calculator')
    })
})