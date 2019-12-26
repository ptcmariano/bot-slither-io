describe('My First Test', function() {
    it('Does not do much!', function() {
        cy.visit('http://slither.io/');
        cy.get('#grqi').click()
        cy.get('#nick').type('presente-de-natal')
        cy.get('#playh > .btnt > div > .nsi')
            .click()
        cy.get('canvas.nsi[width="1500"]').trigger('mousemove',800,800, {force: true})
        cy.wait(2000)
        cy.get('body').trigger('mousemove',200,200,{force:true})
    })
})