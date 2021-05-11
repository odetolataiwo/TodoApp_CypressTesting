describe("test all the Todos using the API", () => {

    //ADD
    //GET
    //UPDATE
    //DELETE
    let id;

    it("should add a todo correctly using the API", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:8080/todos",
            body: {
                "name": "todo1",
                "isComplete": false
            } 
        }).then(response => {
            id = response.body.id
            expect(response.status).to.be.eq(201)
            expect(response.body.name).to.be.eql('todo1')
        })
    })

    it("should get a specific todo correctly", () => {
        cy.request("GET","http://localhost:8080/todos/" + id).then(response => {
            expect(response.status).to.be.eq(200)
            expect(response.body.name).to.be.eql('todo1')
        })
    })
    
    it("should update the status of todo correctly", () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:8080/todos/" + id,
            body: {
                "name": "todo1",
                "isComplete": false
            } 
        }).then(response => {
            expect(response.body.isComplete).to.be.eql(false)
        })
    })
    
    it("should delete a todo", () => {
        cy.request("DELETE","http://localhost:8080/todos/" + id).then(response => {
            expect(response.status).to.be.eq(200)
        })
    })





})