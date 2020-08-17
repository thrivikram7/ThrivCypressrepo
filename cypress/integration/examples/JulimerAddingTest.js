describe('Adding on Angular Application Julimer Protractor Example',function(){
    
    it('Add 10+10',function(){
        cy.visit("https://juliemr.github.io/protractor-demo/")
        cy.get('.container > div:nth-child(1) > h3:nth-child(1)').should('Super Calculator')
         cy.get("[ng-model='first']").should('be.visible').should('be.enabled').type('100')
         cy.get("[ng-model='second']").should('be.visible').should('be.enabled').type('200')
        cy.get('#gobutton').should('be.visible').click()
    })

})