import { slowCypressDown } from 'cypress-slow-down'
// slow down each command by the default amount
// which is 1 second
slowCypressDown()

describe('mysuit', ()=>
{
    it("Capture screenshots and videos", ()=>{
        
        cy.visit("https://demo.opencart.com/")
        cy.screenshot("homepage")

        cy.wait(3000)

        cy.get("img[title='Your Store']").screenshot("logo")


        // Automatically capture screenshot and video on failure - only when you execute through CLI

        cy.visit("https://demo.opencart.com/")
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        // cy.get("div[id='content'] h2").should('have.text', "Tablets") // Cameras
        
    })
})