///<reference types="Cypress" />

describe("Todo UI Testing", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("Should add a new todo correctly", () => {
        cy.addNewTodo("First Todo")
        cy.get('.todo-item').last().should('contain.text', 'First Todo')
        cy.log('Hello Github Integration')
    })

    it('should be able to toggle the status', () => {
        cy.addNewTodo("Second Todo")
        cy.get('.todo-checkbox').check().should('be.checked')
        cy.get('.todo-checkbox').uncheck().should('not.be.checked')
    })

    it("should delete a todo correctly",() => {
        cy.addNewTodo("Third Todo")
        cy.get('.delete-item').click()
    })

    it("add empty todo", () => {
        cy.addNewTodo("")
    })

    afterEach(() => {
        cy.get('body').then($el => {
            if($el.find('.delete-item').length > 0){
                cy.get('.delete-item').click({multiple:true })
            }
        })
    })
})