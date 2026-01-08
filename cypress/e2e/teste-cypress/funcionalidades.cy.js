/// <reference types="cypress" />

describe('suite de testes',()=>{
    beforeEach(()=>{
        cy.visit("https://ebac-agenda-contatos-tan.vercel.app/")
    })
     it('deve incluir o nome de um contato',()=>{
         cy.get('input[placeholder="Nome"]').type('Luis Fernando Alcântara do Nascimento')
         cy.get('input[placeholder="E-mail"]').type('luisfernando@gmail.com')
         cy.get('input[type="tel"]').type('00-00000-0000')
         cy.get('.adicionar').click()
     })

    it('deve editar um contato',()=>{

          cy.contains('.sc-beqWaB','Luis Fernando Alcântara do Nascimento').within(()=>{
          cy.contains('button','Editar').click()
          })
          cy.get('input[placeholder="Nome"]').clear().type('Luis Fernando')
          cy.get('input[placeholder="E-mail"]').clear().type('LuisAdn@gmail.com')
          cy.get('input[type="tel"]').clear().type('11-11111-1111')
          cy.get('.alterar').click()
          cy.wait(2000)

         })

    
         
  it('deve excuir um contato',()=>{
    cy.wait(2000)
        cy.contains('.sc-beqWaB','Luis Fernando').within(()=>{
            cy.contains('button','Deletar').click()
        })})
         

})