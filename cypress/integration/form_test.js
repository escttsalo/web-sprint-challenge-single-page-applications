describe('Form App', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[id=name-input]')
    const pepInput = () => cy.get('input[name=pepperoni]')
    const cabInput = () => cy.get('input[name=canadian_bacon]')
    const form = () => cy.get('form')

    it('Able to enter name', () => {
        nameInput()
        .should('have.value', '')
        .type('Franky Random')
        .should('have.value', 'Franky Random')
    })

    it('Able to select pepperoni', () => {
        pepInput()
        .should('not.be.checked')
        .check()
        .should('be.checked')
    })

    it('Able to select canadian bacon', () => {
        cabInput()
        .should('not.be.checked')
        .check()
        .should('be.checked')
    })

    it('Able to submit form', () => {
        form()
        .submit()
    })
})