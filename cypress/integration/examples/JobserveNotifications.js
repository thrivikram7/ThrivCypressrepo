describe('Get job Serve Notifications',function(){
    
    it('',function(){
       cy.visit("https://www.jobserve.com/gb/en/JobSearch.aspx")
       //var test =  cy.title()
       //cy.log("titleeeeee { "+test+" }************")
        //cy.title().should('eq','Job Search')
        cy.get('#txtKeyWords').type('Selenium')
        cy.get('#selJType').select('Contract')
        cy.get('#RunMainSearch').click()
        cy.get('.resultnumber').should('have.text','14')
    })

})