
describe("filter functionality test case", () => {

    beforeEach(() => {

        cy.intercept({
            method: "GET",
            url: "http://localhost:8080/todos"
        }, {
            body: [
                {
                    "name": "Learn Cypress",
                    "isComplete": false
                },
                {
                    "name": "Learn Django",
                    "isComplete": false
                },
                {
                    "name": "Build a Portfolio",
                    "isComplete": true
                },
                {
                    "name": "Shopping",
                    "isComplete": true
                }
            ]
        })
        
        cy.visit("http://localhost:3000")

    })

    it("should filter out the complete todos correctly", () => {

        cy.contains('Complete').click()
        cy.url().should('contain', '/complete')
        cy.get('.todo-checkbox').each(el => {
            cy.wrap(el).should('be.checked')
        })
    })

    it("should filter out the active todos correctly", () => {
        cy.contains('Active').click()
        cy.url().should('contain', '/active')
        cy.get('.todo-checkbox').each(el => {
            cy.wrap(el).should('not.be.checked')
        })
    })





})